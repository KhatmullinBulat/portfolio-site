<template>
  <section class="bg-secondary py-8">
    <div class="container">
      <h2 class="lg:text-4xl md:text-2xl sm:text-xl mb-6">Technical Skills</h2>
      <div
        class="rounded-lg border-2 border-dashed border-yellow-100 py-4 px-6"
      >
        <div
          class="grid sm:grid-cols-3 sm:grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-6"
        >
          <div class="flex flex-col items-center">
            <HtmlIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Html</span>
          </div>
          <div class="flex flex-col items-center">
            <CssIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Css</span>
          </div>
          <div class="flex flex-col items-center">
            <ScssIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Sccs</span>
          </div>
          <div class="flex flex-col items-center">
            <JsIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">JavaScript</span>
          </div>
          <div class="flex flex-col items-center">
            <TsIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">TypeScript</span>
          </div>
          <div class="flex flex-col items-center">
            <GulpIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Gulp</span>
          </div>
          <div class="flex flex-col items-center">
            <BootstrapIcon
              class="w-12 px-1 mb-1"
              :fontControlled="false"
              filled
            />
            <span class="text-sm">Bootstrap</span>
          </div>
          <div class="flex flex-col items-center">
            <TailwindIcon
              class="w-12 px-1 mb-1"
              :fontControlled="false"
              filled
            />
            <span class="text-sm">Tailwindcss</span>
          </div>
          <div class="flex flex-col items-center">
            <VueIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Vue</span>
          </div>
          <div class="flex flex-col items-center">
            <LogoIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Nuxt</span>
          </div>
          <div class="flex flex-col items-center">
            <GithubIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Github</span>
          </div>
          <div class="flex flex-col items-center">
            <GitlabIcon class="w-12 px-1 mb-1" :fontControlled="false" filled />
            <span class="text-sm">Gitlab</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HtmlIcon from "~/assets/icons/html.svg";
import CssIcon from "~/assets/icons/css.svg";
import ScssIcon from "~/assets/icons/scss.svg";
import JsIcon from "~/assets/icons/js.svg";
import TsIcon from "~/assets/icons/ts.svg";
import GulpIcon from "~/assets/icons/gulp.svg";
import BootstrapIcon from "~/assets/icons/bootstrap.svg";
import TailwindIcon from "~/assets/icons/tailwind.svg";
import VueIcon from "~/assets/icons/vue.svg";
import LogoIcon from "~/assets/icons/logo.svg";
import GithubIcon from "~/assets/icons/github.svg";
import GitlabIcon from "~/assets/icons/gitlab.svg";
</script>

<style scoped></style>
