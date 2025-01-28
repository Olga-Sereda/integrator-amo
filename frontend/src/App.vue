<script setup lang="ts">
import Dropdown from './components/Dropdown.vue';
import CreateButton from './components/CreateButton.vue';
import MainList from './components/MainList.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useEntityStore } from './store'; 

const selectedEntity = ref('none');
const store = useEntityStore();
const results = store.results;

const clincked = ref(false)
const itemAddading = ref(false)

const createEntity = async () => {
  if (selectedEntity.value === 'none' || clincked.value) {
    console.log('Сущность не выбрана');
    return;
  }

  clincked.value = true
  itemAddading.value = true

  const entityData = {
      name: `Новая ${selectedEntity.value === 'leads' ? 'сделка' : selectedEntity.value === 'contacts' ? 'контакт' : 'компания'}`,
  };

  try {
    await new Promise<void>((resolve) => {
      setTimeout( async() => {
        try {
          const response = await axios.post(`http://localhost:3000/api/create-entity/${selectedEntity.value}`, entityData)

          const entities = response.data._embedded[selectedEntity.value];
          console.log('Сущности, полученные от сервера:', entities);

          entities.forEach((entity: any) => {
            store.addEntity({ id: entity.id });
          });

          resolve();
        } catch (error) {
          console.error('Ошибка при создании сущности:', error);
          resolve();
      }
    }, 2000);
    })
  } finally {
    itemAddading.value = false 
    clincked.value = false
  }
};


const updateItemAdding = (value: boolean) => {
  itemAddading.value = value;
};
</script>

<template>
  <Dropdown v-model:selectedEntity="selectedEntity" />
  <CreateButton 
    :selectedEntity="selectedEntity" 
    @create-entity="createEntity" 
    :itemAddading="itemAddading"
    @updateItemAdding="updateItemAdding" />
  <MainList :results="results" />
</template>

<style scoped>

</style>
