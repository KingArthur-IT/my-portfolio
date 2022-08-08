<template>
  <Navbar />
  <LanguageSelect />
  <HeadScreen />
  <AboutMeSection />
  <AdvantagesSection />
  <OfferSection />
  <CasesSection />
  <WorkConsistent />
  <ContactsSection />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import HeadScreen from '@/components/HeadScreen.vue';
import AboutMeSection from '@/components/AboutMeSection.vue';
import OfferSection from '@/components/OfferSection.vue';
import CasesSection from '@/components/CasesSection.vue';
import WorkConsistent from '@/components/WorkConsistent.vue';
import ContactsSection from '@/components/ContactsSection.vue';
import Footer from '@/components/Footer.vue';
import AdvantagesSection from '@/components/AdvantagesSection.vue';
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
      rootMargin: '-30px',
    });

    animatedElemets.forEach(entry => {
      animateObserver.observe(entry);
    });

    //
    document.querySelectorAll('a[href^="#"').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          let href = this.getAttribute('href').substring(1);
          const scrollTarget = document.getElementById(href);
          const topOffset = 60; // отступ сверху 
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
    });
})

</script>

<style>
@import '@/assets/base.css';
@import '@/assets/normolize.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600&family=Roboto+Slab&family=Russo+One&display=swap')

</style>
