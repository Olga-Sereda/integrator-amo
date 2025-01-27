<script setup lang="ts">
import { BButton } from 'bootstrap-vue-next';

defineProps({
    selectedEntity: {
        type: String
    }
})

const emit = defineEmits<{
    (event: 'createEntity'): void
}>()

const createEntity = () => {
    emit('createEntity')
}
</script>

<template>
    <BButton :disabled="selectedEntity === 'none'" @click="createEntity" variant="info" class="mb-4">Создать</BButton>
</template>