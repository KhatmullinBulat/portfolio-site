<template>
  <NuxtLayout name="home">
    <Hero />
    <LazyMe />
    <LazyAbout />
    <LazySkills />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});
</script>

<style scoped></style>
