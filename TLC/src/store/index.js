import { defineStore } from "pinia";
export const useAppStore = defineStore("store", {
  state: () => ({
    collectionId: null,
    collectionName: null,
    singleProductId: null,
    addToCounter: 0,
    addToCardId: [],
    checkOutProductList: [],
    totalPrice: null,
    receiptId: null,
  }),
  actions: {
    getCurrentCollectionId(id, name) {
      this.collectionId = id;
      this.collectionName = name;
    },
    singleProduct(id) {
      console.log(id);
      this.singleProductId = id;
      console.log(this.singleProductId);
    },
    updateCurrentCollectionID() {
      this.collectionId = null;
      this.collectionName = null;
    },
    addTocardBag(id) {
      this.addToCounter++;
      this.addToCardId.push(id);
    },
    removeFromCart(productId) {
      console.log(this.addToCardId);
      const index = this.addToCardId.indexOf(productId);
      console.log(index);
      this.addToCounter--;
      if (index !== -1) {
        this.addToCardId.splice(index, 1);
      }
      console.log(this.addToCardId);
    },
    checkoutData(productList, totalPrice) {
      console.log(productList);
      console.log(totalPrice);
      this.checkOutProductList = productList;
      this.totalPrice = totalPrice;
    },
    createOrderData(id) {
      this.receiptId = id;
    },
  },
});
