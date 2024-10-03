<template>
  <section
    ref="hero"
    class="hero flex relative overflow-hidden sm:h-1/2 md:h-dvh"
  >
    <div
      v-for="item in parallaxItems"
      :key="item.id"
      ref="refItems"
      class="parallaxItem"
    >
      <NuxtImg
        :src="item.src"
        :alt="item.name"
        preload
        class="parallaxItemImg"
      />
    </div>

    <h1
      ref="parallaxTitle"
      class="title text-center text-9xl font-bold tracking-wide sm:text-6xl md:text-7xl"
    >
      Hello.
    </h1>
  </section>
</template>

<script setup lang="ts">
const parallaxItems = ref([
  { id: 1, src: "/hero/mount2.webp", name: "Гора 2" },
  { id: 2, src: "/hero/mount1.webp", name: "Гора 1" },
  { id: 3, src: "/hero/bush2.webp", name: "Куст 2" },
  { id: 4, src: "/hero/bush1.webp", name: "Куст 1" },
  { id: 5, src: "/hero/leaf2.webp", name: "Лист 2" },
  { id: 6, src: "/hero/leaf1.webp", name: "Лист 1" },
]);

const hero = ref<HTMLElement | null>(null);
const refItems = ref<HTMLElement[] | null>(null);
const parallaxTitle = ref<HTMLElement | null>(null);

let ticking = false;
const handleScroll = () => {
  if (!hero.value) return;
  const heroPos = hero.value.getBoundingClientRect().top * -1;
  const windowHeight = window.innerHeight;

  if (heroPos < windowHeight) {
    const scrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax(scrollPos);
        ticking = false;
      });
      ticking = true;
    }
  }
};

const updateParallax = (scrollPos: number) => {
  if (!refItems.value || !parallaxTitle.value) return;

  parallaxTitle.value.style.transform = `translate(-50%, ${scrollPos * 1.1}px)`;
  refItems.value[0].style.transform = `translateY(${scrollPos * 1.2}px)`;
  refItems.value[1].style.transform = `translateY(${scrollPos * 1.1}px)`;
  refItems.value[2].style.transform = `translateY(${scrollPos}px)`;
  refItems.value[4].style.transform = `translateX(${scrollPos}px)`;
  refItems.value[5].style.transform = `translateX(${-scrollPos}px)`;
};

onMounted(() => {
  if (refItems.value) {
    refItems.value.forEach((item, index) => {
      item.style.zIndex = `${index}`;
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
});
</script>

<style scoped>
.hero {
  background: linear-gradient(to top, #d2e2fb 30%, #86a8db);
}

.parallaxItem {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.parallaxItemImg {
  width: 100%;
}

.hero .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
}
</style>
