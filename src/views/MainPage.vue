<template>
  <HeadScreen />
  <AboutMeSection />
</template>

<script setup>
import HeadScreen from '@/components/HeadScreen.vue';
import AboutMeSection from '@/components/AboutMeSection.vue';
import { onMounted } from '@vue/runtime-core';
//import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
    //Scroll animation
    const animatedElemets = document.querySelectorAll('.anim-item');
    const animateObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-active')
        }
      })
    }, {
      rootMargin: '-90px',
    });

    animatedElemets.forEach(entry => {
      animateObserver.observe(entry);
    });
})

</script>

<style>
@import '@/assets/base.css';
@import '@/assets/normolize.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600&family=Roboto+Slab&family=Russo+One&display=swap')

</style>
