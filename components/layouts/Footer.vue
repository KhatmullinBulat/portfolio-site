<template>
  <footer class="sticky top-full bg-gray-900">
    <div
      class="container flex items-center justify-between py-6 sm:flex-col md:flex-row"
    >
      <LogoIcon class="w-20" :fontControlled="false" />

      <p class="text-sm sm:py-4 text-center">
        <a href="mailto:bolathatmullin@yandex.ru" target="_blank">
          bolathatmullin@yandex.ru
        </a>
        <br />
        © {{ year.getFullYear() }}
      </p>

      <div class="flex justify-center gap-2">
        <a href="https://github.com/KhatmullinBulat" target="_blank">
          <GithubIcon class="w-10 px-1" :fontControlled="false" />
        </a>
        <a href="https://vk.com/id425400504" target="_blank">
          <VkIcon class="w-10 px-1" :fontControlled="false" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LogoIcon from "~/assets/icons/logo.svg";
import GithubIcon from "~/assets/icons/github.svg";
import VkIcon from "~/assets/icons/vk.svg";

const year = new Date();
</script>

<style scoped></style>
