<script setup lang="ts">
import { ref, watch } from 'vue';
import { BFormSelect } from 'bootstrap-vue-next';

const entity = [
    { value: "none", text: 'Не выбрано'},
    { value: "leads", text: 'Сделка' },
    { value: "contacts", text: 'Контакт' },
    { value: "companies", text: 'Компания' },
]

const selectedEntity = ref('none')

const emit = defineEmits<{
    (event: 'update:selectedEntity', value: string): void;
}>();

watch(selectedEntity, (newValue) => {
    emit('update:selectedEntity', newValue);
});
</script>

<template>
    <BFormSelect v-model="selectedEntity" :options="entity" class="mb-3" />
</template>