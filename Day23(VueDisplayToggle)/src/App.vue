<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showModal() {
      this.isShow = true;
    },
    hideModal() {
      this.isShow = false;
    },
    toggleModal() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<template>
  <div v-show="isShow" class="modalbox">
    Modal
    <button @click="hideModal">Hide Modal</button>
  </div>
  <button @click="showModal">Show Modal</button>
  <button @click="toggleModal">Toggle</button>
</template>

<style>
.modalbox {
  box-sizing: border-box;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  padding: 30px;
}
</style>
