<template>
  <img src="@/assets/A1.jpg" height="200" width="200"/>

    <div class="wrapper">
      <HelloWorld msg="Fuck you易俊豪" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
