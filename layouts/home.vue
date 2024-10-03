<template>
  <div class="h-full relative">
    <LayoutsHeader
      :class="headerClasses"
      class="header fixed top-0 transition-transform duration-300 w-full z-20"
    />
    <slot></slot>
    <LazyLayoutsFooter />
  </div>
</template>

<script setup lang="ts">
const isVisible = ref(true);
const lastSCrollY = ref(0);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastSCrollY.value && currentScrollY > 50) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }

  lastSCrollY.value = currentScrollY;
};

let ticking = false;
const optimizedHandleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", optimizedHandleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", optimizedHandleScroll);
});

const headerClasses = computed(() => ({
  "-translate-y-full": !isVisible.value,
  "translate-y-0": isVisible.value,
}));
</script>

<style scoped></style>
