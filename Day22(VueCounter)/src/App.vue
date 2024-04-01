<template>
  <!-- declarative -->
  <h1>Count - {{ count }}</h1>
  <!-- directive -->
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
<script>
export default {
  //state
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    lessThanZero() {
      return this.count <= 0;
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.lessThanZero) {
        return;
      }
      this.count -= 1;
    },
  },
  watch: {
    count(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
};
</script>
<style>
h1 {
  color: bisque;
  height: 50px;
}
body {
  background-color: black;
  display: flex;
}
button {
  width: 100px;
  height: 50px;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;
}
</style>
