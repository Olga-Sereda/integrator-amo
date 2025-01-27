<script setup lang="ts">
import { useEntityStore } from '../store'; 
import { BListGroup, BListGroupItem } from 'bootstrap-vue-next';

defineProps<{
    results: { id: string }[]
}>()

const store = useEntityStore();
console.log(store.results)
</script>

<template>
    <div>
        <h2>Список сущностей:</h2>
        <BListGroup v-if="results.length">
            <BListGroupItem v-for="(result, index) in results" :key="index">
                ID: {{ result.id }}
            </BListGroupItem>
        </BListGroup>
    </div>
</template>