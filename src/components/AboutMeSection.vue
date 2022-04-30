<template>
  <section class = "section about-me-sect" id = "about-me">
        <h2 class = "title">{{ $t("message.aboutMe") }}</h2>
        <div class="anim-item title-underline"></div>
        <div class="about-me-wrap">
            <div class="about-me-sect__info">
                <ul class = "about-me-list">
                    <li class = "about-me-list__item">
                        <div class="icon-wrapper">
                            <FlagIcon class="icon"/>
                            {{ $t("message.generalInfo") }}
                        </div>
                    </li>
                    <li class="about-me-list__item">
                        <div class="icon-wrapper">
                            <EducationIcon class="icon"/>
                            <strong>{{ $t("message.education") }}:</strong><br>
                        </div>
                        {{ $t("message.educationInfo") }}
                    </li>
                    <li class="about-me-list__item">
                        <div class="icon-wrapper">
                            <PersonIcon class="icon"/>
                            {{ $t("message.jobsInfo") }}
                        </div>
                    </li>
                    <li class="about-me-list__item">
                        <a href="https://freelancehunt.com/freelancer/KingArthur.html" target="_blank">
                            <div class="icon-wrapper">
                                <LinkIcon class="icon"/>
                                {{ $t("message.profileInfo1") }}
                            </div>
                            {{ $t("message.profileInfo2") }}
                         </a>
                    </li>
                </ul>
            </div>
            <div class="about-me-sect__technologies">
                <ul class="tech-list">
                    <li class="tech-list__item" id = "tech-item-1">Html</li>
                    <li class="tech-list__item" id = "tech-item-2">Css</li>
                    <li class="tech-list__item" id = "tech-item-3">Sass</li>
                    <li class="tech-list__item" id = "tech-item-4">Git</li>
                    <li class="tech-list__item" id = "tech-item-5">JavaScript</li>
                    <li class="tech-list__item" id = "tech-item-6">Vue.JS</li>
                    <li class="tech-list__item" id = "tech-item-7">Three.js</li>
                    <li class="tech-list__item" id = "tech-item-8">BEM</li>
                    <li class="tech-list__item" id = "tech-item-10">npm</li>
                </ul>
                <div class="tech-animation">
                    <figure class = "tech-animation__fig">
                        <img src="@/assets/img/fan.svg" alt="" class="tech-animation__img" id = "fan" data-clicked = "false">
                    </figure>       
                </div>                
            </div>
            <div class = "technologies-md">
                <h2 class="title">{{ $t("message.stack") }}</h2>
                <div class="anim-item title-underline"></div>
                <img src="@/assets/img/Stack.jpg" alt="" class = "technologies-md__img">
            </div>
        </div>
    </section>
</template>

<script>
import PersonIcon from '@/components/icons/PersonIcon.vue'
import FlagIcon from '@/components/icons/FlagIcon.vue'
import LinkIcon from '@/components/icons/LinkIcon.vue'
import EducationIcon from '@/components/icons/EducationIcon.vue'

export default {
  components: { PersonIcon, FlagIcon, LinkIcon, EducationIcon},
}
</script>

<style scoped>
.about-me-sect {
  z-index: 1;
  background: #fff; 
}
.about-me-sect__info {
    flex-basis: 50%; 
}
.about-me-sect__technologies {
    flex-basis: 50%;
    position: relative;
    display: flex;
    flex-direction: column; 
}

.about-me-wrap {
  display: flex; 
}

.about-me-list {
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: var(--second);
  line-height: 1.5;
  margin-left: 20px;
  list-style: none; 
}
.about-me-list__item {  
    margin-bottom: 25px; 
}
.about-me-list__item:nth-child(2) {
    margin-left: 40px; 
}
.about-me-list__item:nth-child(3) {
    margin-left: 80px; 
}
.about-me-list__item:nth-child(4) {
    margin-left: 120px; 
}


.tech-list {
  display: block;
  flex-basis: 90%;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 24px;
  font-weight: 900;
  color: var(--second);
  list-style: none;
  position: relative;
  margin: 0; 
}
.tech-list__item {
    position: absolute; 
}
.tech-list__item:nth-child(1) {
    left: 5%;
    top: 5%;
    color: green; 
}
.tech-list__item:nth-child(2) {
    left: 70%;
    top: 10%;
    color: gold; 
}
.tech-list__item:nth-child(3) {
    left: 35%;
    top: 0%;
    color: magenta; 
}
.tech-list__item:nth-child(4) {
    left: 55%;
    top: 20%;
    color: gray; 
}
.tech-list__item:nth-child(5) {
    left: 10%;
    top: 40%;
    color: blue; 
}
.tech-list__item:nth-child(6) {
    left: 75%;
    top: 45%;
    color: hotpink; 
}
.tech-list__item:nth-child(7) {
    left: 40%;
    top: 50%;
    color: brown; 
}
.tech-list__item:nth-child(8) {
    left: 35%;
    top: 110%;
    color: cadetblue; 
}
.tech-list__item:nth-child(9) {
    left: 70%;
    top: 120%;
    color: red; 
}
.tech-list__item:nth-child(10) {
    left: 60%;
    top: 92%;
    color: green; 
}
.tech-list__item:nth-child(11) {
    left: 20%;
    top: 92%;
    color: coral; 
}
.tech-list__item:hover {
    color: var(--third);
    cursor: pointer;
    font-weight: 600; 
}

.tech-animation {
  display: block;
  flex-basis: 10%; 
}
.tech-animation__fig {
    position: relative;
    margin: auto;
    transform: rotate3d(1, 0, 0, 65deg);
    display: block;
    margin-top: 15px; 
}
.tech-animation__img {
    display: block;
    width: 100px;
    transform: rotate3d(0, 0, 1, 0deg);
    margin: auto;
    cursor: pointer; 
}

.technologies-md {
  display: none; 
}
.technologies-md__img {
    width: 100%;
    display: block; 
}

@media screen and (max-width: 950px) {
    .about-me-wrap {
        flex-direction: column; 
    }
    .about-me-sect__technologies {
        display: none; 
    }
    .technologies-md {
        display: block; 
    }
    .about-me-sect__info {
        margin-bottom: 15px; 
    } 
}

@media screen and (max-width: 750px) {
    .about-me-list {
        margin-left: 0px; 
    }
    .about-me-list__item:nth-child(2) {
      margin-left: 20px; 
    }
    .about-me-list__item:nth-child(3) {
      margin-left: 40px;
    } 
    .about-me-list__item:nth-child(4) {
      margin-left: 60px;
    } 
}

@media screen and (max-width: 650px) {
    .about-me-list {
        font-size: 20px; 
    }
    .about-me-list__item {
      margin-bottom: 10px; 
    } 
}

@media screen and (max-width: 550px) {
    .about-me-list__item:nth-child(2) {
        margin-left: 0px; 
    }
    .about-me-list__item:nth-child(3) {
        margin-left: 0px; 
    } 
    .about-me-list__item:nth-child(4) {
        margin-left: 0px; 
    } 
}

@media screen and (max-width: 450px) {
    .about-me-list {
        font-size: 16px; 
    } 
}
.icon{
    margin-right: 10px;
}
.icon-wrapper{
    display: flex;
    align-items: center;    
}
</style>