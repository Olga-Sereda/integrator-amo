<script setup lang="ts">
import { BButton } from 'bootstrap-vue-next';
import Spinner from '../components/Spinner.vue';

defineProps({
    selectedEntity: {
        type: String
    },
    itemAddading: {
        type: Boolean
    }
})

const emit = defineEmits<{
    (event: 'createEntity'): void,
    (event: 'updateItemAdding', value: boolean): void
}>()

const createEntity = () => {
    emit('createEntity');
    emit('updateItemAdding', true)
}
</script>

<template>
    <BButton :disabled="selectedEntity === 'none'" @click="createEntity" variant="info" class="mb-4">
        <div v-if="itemAddading">
            <Spinner />
        </div>
        <div v-else>Создать </div>
    </BButton>
</template>

<style>
.btn__animate {
    position: absolute;
    right: 0;
    bottom: -5px;
}
</style>