import { defineStore } from "pinia";
export const useAppStore = defineStore("store", {
  state: () => ({
    collectionId: null,
  }),
  actions: {
    getCurrentCollectionId(id) {
      this.collectionId = id;
      console.log(this.collectionId);
    },
    updateCurrentCollectionID() {
      this.collectionId = null;
    },
  },
});
