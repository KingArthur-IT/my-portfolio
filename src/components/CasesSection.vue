<template>
    <section class="section" id = "cases">
        <h2 class="title">{{ $t("message.lastCases") }}</h2>
        <div class="anim-item title-underline"></div>  

        <div class="case-item anim-item tags-wrapper">
            <div class="tag" :class="{'active-filter': selectedFilter === ''}" @click="selectedFilter = ''">Все категории</div>
            <div class="tag" v-for="(tag, i) in tags" :key="i" :class="{'active-filter': selectedFilter === tag}" @click="selectedFilter = tag"># {{tag}}</div>
        </div>

        <div v-for="(project, index) in progressListShown" 
             :key="project.id" class="case-item anim-item" :class="{'anim-active': index <= showCasesCount}"
        >
            <div class="case-item__img">
                <img :src="getImageUrl(project.imgName, project.imgExtension)" :alt="project.imgName" class="anim-item" :class="{'anim-active': index <= showCasesCount}">
            </div>
            <div class="case-item__description"> 
                <h3 class="case-item__title">{{project.title}}</h3>
                <p class="case-item__text">
                    <strong>Исходные данные:</strong> {{project.startData}}
                </p>
                <p class="case-item__text">
                    <strong>Объем выполненной работы:</strong>
                <ul class="case-list">
                    <li v-for="(item, index) in project.progressList" :key="index" class="case-list__item">
                        {{item}}
                    </li>          
                </ul>
                </p>
                <p class="case-item__text">
                    <strong>Результат работы:</strong> {{project.rezult}}
                </p>
                <a :href="project.href" class="case-item__link" v-if="project.href !== ''">
                    <i class="far fa-eye case-list__icon"></i>Перейти на сайт
                </a>
                <div class="tags-list">
                    <div v-for="(tag, i) in project.tags" :key="i" class="tag">
                        #{{tag}}
                    </div>
                </div>
            </div>
        </div>
        <div class="more-btn-wrapper">
            <button v-if="showCasesCount < filteredList.length" @click="MoreEvent">Больше</button>
        </div>
    </section>
</template>

<script>
import { ref, computed } from 'vue'
import { projectsList, tags } from '../data/projectsListData.js'

export default {
    setup(){
        let showCasesCount = ref(5);
        const showCasesStep = 5;

        const getImageUrl = (imgName, imgExt) => {
            return new URL(`../assets/img/previews/${imgName}.${imgExt}`, import.meta.url).href
        };

        const selectedFilter = ref('');

        function MoreEvent(){
            if (showCasesStep + showCasesCount.value <= filteredList.value.length){
                showCasesCount.value += showCasesStep
            }
            else {
                showCasesCount.value = filteredList.value.length;
            }
        }

        let filteredList = computed(() => {
            if (selectedFilter.value !== ''){
                return projectsList.filter((item) => {return item.tags.some(el => el === selectedFilter.value)});
            }
            else return projectsList;
        });

        let progressListShown = computed(() => {
            return filteredList.value.slice(filteredList.value.length - showCasesCount.value, filteredList.value.length).reverse()
        });

        return {
            showCasesCount,
            showCasesStep,
            getImageUrl,
            MoreEvent,
            projectsList,
            tags,
            progressListShown,
            filteredList,
            selectedFilter
        }
    }
}
</script>

<style scoped>
.case-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2% 5%;
  transform: translateX(-100%);
  transition: all 1.5s ease-in-out; 
}
.case-item.anim-active {
    transform: translateX(0%); 
}
.case-item__title {
    font-size: 28px;
    margin: 0;
    margin-bottom: 4%; 
}
.case-item__img {
    flex-basis: 33%;
    width: 33%;
    overflow: hidden; 
}
.case-item__img img {
    width: 100%;
    border-radius: 10px;
    opacity: 0;
    transform: scale(2);
    transition: all 1.5s ease-in-out;
}
.case-item__img img.anim-active {
    opacity: 1;
    transform: scale(1); 
}
.case-item__description {
    font-size: 18px;
    flex-basis: 60%; 
}
.case-item__text {
    margin: 0;
    line-height: 1.5;
    margin-bottom: 1%; 
}
.case-item__link {
    margin-top: 2%;
    cursor: pointer;
    display: block;
    font-weight: bold; 
}
.case-item__link:hover {
    color: var(--third); 
}

.case-list {
    margin: 0;
    margin-bottom: 1%; 
}
.case-list__item {
    margin-bottom: 1%;
    line-height: 1.25;
}
.case-list__icon {
    margin-right: 5px; 
}

.tags-list{
    margin: 15px 0;
    display: flex;
}
.tag{
    padding: 0 10px;
}
.tag:hover{
    color: var(--third); 
}
.tags-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.tags-wrapper .tag{
    cursor: pointer;
}
.active-filter{
    color: var(--third); 
}

@media screen and (max-width: 1200px) {
  .case-item__img {
    flex-basis: 40%;
    width: 40%; }
  .case-item__description {
    flex-basis: 55%; } }

@media screen and (max-width: 1000px) {
  .case-item {
    flex-direction: column; }
    .case-item__img {
      flex-basis: 100%;
      width: 50%;
      margin: auto;
      margin-bottom: 2%; }
    .case-item__description {
      flex-basis: 100%;
      text-align: center;
      margin-top: 1%;
      margin-bottom: 1%; }
  .case-list {
    padding: 0; }
    .case-list__item {
      text-align: justify; } }
    .tags-wrapper{
        flex-direction: row;
    }
@media screen and (max-width: 750px) {
  .case-item__img {
    width: 70%; } }

@media screen and (max-width: 550px) {
  .case-item {
    padding: 2% 0%; }
    .case-item__img {
      width: 90%; } }

.more-btn-wrapper{
    display: flex;
    justify-content: center;
    margin-top: 25px;
}
.more-btn-wrapper button{
    height: 50px;
    width: 200px;
    background: var(--third);
    color: #fff;
    outline: none;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    transition: all 0.3s ease-out;
}
.more-btn-wrapper button:hover{
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
}

@media screen and (max-width: 600px) {
    .case-item {
        transform: translateX(0%);
        margin-top: 10px;
    }
    .case-item__img img {
        opacity: 1;
        transform: scale(1);
    }
    .case-item__description{
        padding-bottom: 30px;
        border-bottom: 1px solid var(--third);
    }
}
</style>