<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}

header a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

main {
  padding: 20px;
}
</style>
