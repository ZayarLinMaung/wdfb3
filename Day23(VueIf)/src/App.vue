<template>
  <div class="container">
    <form @submit.prevent="login">
      <input
        v-model="username"
        type="text"
        name=""
        id=""
        placeholder="Enter username"
      />
      <input
        v-model="email"
        type="email"
        name=""
        id=""
        placeholder="Enter email"
      />
      <input
        v-model="password"
        type="password"
        name=""
        id=""
        placeholder="Enter password"
      />
      <button>Sign up</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Here, you can perform authentication logic
      console.log("Username:", this.username);
      console.log("Password:", this.password);
    },
  },
};
</script>
<style>
body {
  margin: 0;
}
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 20px;
}
form,
input,
button {
  border-radius: 10px;
}
input,
button {
  padding: 10px;
}
</style>
