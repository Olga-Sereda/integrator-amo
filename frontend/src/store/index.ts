import { defineStore } from "pinia";

export const useEntityStore = defineStore("entities", {
  state: () => ({
    results: [] as { id: string }[],
  }),
  actions: {
    addEntity(entity: { id: string }) {
      this.results.push(entity);
    },
  },
});
