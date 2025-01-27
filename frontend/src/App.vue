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

const createEntity = async () => {
  if (selectedEntity.value === 'none' || clincked.value) {
    console.log('Сущность не выбрана');
    return;
  }

  clincked.value = true

  const entityData = {
      name: `Новая ${selectedEntity.value === 'leads' ? 'сделка' : selectedEntity.value === 'contacts' ? 'контакт' : 'компания'}`,
  };

  try {
    const response = await axios.post(`http://localhost:3000/api/create-entity/${selectedEntity.value}`, entityData)

    const entities = response.data._embedded[selectedEntity.value];
    console.log('Сущности, полученные от сервера:', entities);

    entities.forEach((entity: any) => {
      store.addEntity({ id: entity.id });
    });

  } catch (error) {
    console.error('Ошибка при создании сущности:', error);
  } finally {
    clincked.value = false
  }
};
</script>

<template>
  <Dropdown v-model:selectedEntity="selectedEntity" />
  <CreateButton :selectedEntity="selectedEntity" @create-entity="createEntity" />
  <MainList :results="results" />
</template>

<style scoped>

</style>
