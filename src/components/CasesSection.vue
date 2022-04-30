<template>
    <section class="section" id = "cases">
        <h2 class="title">{{ $t("message.lastCases") }}</h2>
        <div class="anim-item title-underline"></div>  
        <div v-for="project in projectsList.filter((item, i) => {return i < projectsList.length && i > projectsList.length - showCasesCount}).reverse()" 
             :key="project.id" class="case-item anim-item" :class="{'anim-active': project.id < showCasesCount}"
        >
            <div class="case-item__img">
                <img :src="getImageUrl(project.imgName)" :alt="project.imgName" class="anim-item" :class="{'anim-active': project.id < showCasesCount}">
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
            </div>
        </div>
        <div class="more-btn-wrapper">
            <button v-if="showCasesCount < projectsList.length" @click="MoreEvent">Больше</button>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        let showCasesCount = ref(5);
        const showCasesStep = 5;

        const getImageUrl = (imgName) => {
            return new URL(`../assets/img/previews/${imgName}.jpg`, import.meta.url).href
        }

        const projectsList = [
            {
                id: 0,
                imgName: 'kvpm-0',
                title: 'Сайт кафедры высшей и прикладной математики ГВУЗ “ПГТУ”',
                startData: 'тексты, картинки и пожелания',
                progressList: [
                    'прототипирование сайта: создание схемы расположения элементов, картинок, текстов;',
                    'подбор цветов и шрифтов;',
                    'кроссбраузерная верстка (HTML+BEM+CSS+SASS);',
                    'адаптивность под все типы экранов (ПК, планшеты, мобильные телефоны) и программирование интерактивных элементов;',
                    'посадка на систему управления контентом Wordpress.'
                ],
                rezult: 'адаптивный и кроссбраузерный сайт, управляемый на Wordpress.',
                href: 'https://kvpm.pstu.edu'
            },
            {
                id: 1,
                imgName: 'swippingMesh-0',
                title: 'Интерактивная анимация движения частиц',
                startData: 'техническое задание о разроботке анимации, которая имитирует движение жидкости',
                progressList: [
                    `Создание классовой структуры для описания системы частиц и программирования
                        её движения на чистом JavaScript (без использования любых сторонних библиотек).
                        Для устранения задержки визуализации при большом количестве частиц,
                        их прорисовка реализована при помощи WebGL API`,
                ],
                rezult: 'Браузерное решение для интерактивного взаимодействия с системой частиц, которая имитирует движение жидкости',
                href: 'https://kingarthur-it.github.io/SwipingMesh/'
            },
            {
                id: 2,
                imgName: 'void-0',
                title: 'Верстка сайта разработки мобильных приложений и веб-сервисов',
                startData: 'дизайн-макет в Figma',
                progressList: [
                    'кроссбраузерная верстка HTML5+BEM+CSS3(SASS);',
                    'адаптивность под все типы экранов (ПК, планшеты, мобильные телефоны) и программирование интерактивных элементов: кнопки, слайдеры;',
                ],
                rezult: 'адаптивная и кроссбраузерная верстка сайта',
                href: 'https://kingarthur-it.github.io/Void-Cite-Template/'
            },
            {
                id: 3,
                imgName: 'dosport-0',
                title: 'Верстка сайта спортивных площадок',
                startData: 'дизайн-макет в Figma',
                progressList: [
                    'кроссбраузерная верстка HTML5+BEM+CSS3(SASS);',
                    'адаптивность под все типы экранов (ПК, планшеты, мобильные телефоны) и программирование интерактивных элементов: кнопки, слайдер;',
                ],
                rezult: 'адаптивная и кроссбраузерная верстка сайта.',
                href: 'https://kingarthur-it.github.io/FindSport/'
            },
            {
                id: 4,
                imgName: 'Textures-Preview-0',
                title: 'Интерактивная система моделирования течений жидкости',
                startData: 'численные схемы',
                progressList: [
                    `Создание классовой структуры проекта, программирование алгоритма и написание шейдерных
                        програм для моделирования течения жидкости и обтеканий тел с использованием текстур.
                        Проект написан на чистом JavaScript и WebGL API (без использования любых сторонних библиотек).`
                ],
                rezult: 'Интерактивная система для моделирования течений жидкостей.',
                href: 'https://kingarthur-it.github.io/SwipingFluidTextures/'
            },
            {
                id: 5,
                imgName: 'ChooseVideoScene',
                title: '3D Сцена с видео текстурами',
                startData: '3D модель сцены с телевизорами',
                progressList: [
                    `Создана 3D сцена с телевизорами, на экранах которых загружается видео. 
                        Для создания проекта использовалась библиотека Three.js (WebGL) и
                        JavaScript.`
                ],
                rezult: '3D Сцена с видео текстурами',
                href: 'https://kingarthur-it.github.io/ChooseVideoScene/'
            },
            {
                id: 6,
                imgName: 'Calibration',
                title: 'Веб симуляция калибровки медицинского оборудования',
                startData: '3D модель устройства, картинка с траекторией калибровки, фон',
                progressList: [
                    `Создана 3D сцена с устройством и три уровня для обучения медицинского персонала: тренировка, практика и экзамен. 
                        Устройство жестко зафиксировано в нижней точке и свободно двигается в верхней, описывая некоторую траекторию движения. Цель симулятора - 
                        натренировать медицинского работника повторять эту траеторию с требуемой точностью. Правильная траектория парсится из картинки и используется 
                        для тренировки и прохождения экзамена. Для создания проекта использовалась библиотека Three.js (WebGL) и JavaScript.`
                ],
                rezult: 'Обучающая веб симуляция',
                href: 'https://kingarthur-it.github.io/MedSimulation/'
            },
            {
                id: 7,
                imgName: 'pandaSwap',
                title: 'Создание главного экрана с интерактивной анимацией',
                startData: 'Макет главного экрана в Figma',
                progressList: [
                    'кроссбраузерная верстка (HTML+BEM+CSS+SASS), создание адаптивности под все типы экранов (ПК, планшеты, мобильные телефоны);',
                    'программирование движения интерактивных элементов: панд и бамбука на JavaScript;',
                ],
                rezult: 'Главный экран с интерактивными элементами',
                href: 'https://kingarthur-it.github.io/PandaSwap/'
            },
            {
                id: 8,
                imgName: 'PadPlacement',
                title: 'Веб симуляция проводимости человеческим телом электричеста и обучения корректному расположению медицинского пада на тело для медицинских работников',
                startData: '3D модель тела человека, лампочки, картинка с устройством наложения, фон',
                progressList: [
                    `Создана 3D сцена с телом человека, которая выполняет две обучающие функции для медицинского персонала. При движении мышкой создается проекция 
                        наложения медицинского пада на тело. К подбородку человека закреплен электрод (подразумевается). Чем дальше положение пада на теле от подбородка, 
                        тем меньше светится лампочка. Это свечение связано с проводимостью телом человека электричества и изменением сопротивления. 
                        При нажатии на кнопку мыши пад фиксируется на теле. Причем, если он находится в окрестности правильного места, то фиксируется на нем и появляется 
                        сообщение об успешном расположении. 
                        Для создания проекта использовалась библиотека Three.js (WebGL), шейдеры свечения (GLSL) и JavaScript.`
                ],
                rezult: 'Обучающая веб симуляция',
                href: 'https://kingarthur-it.github.io/PadPlacement-MedSimulation/'
            },
            {
                id: 9,
                imgName: 'Brookfield',
                title: 'Верстка сайта на Vue.JS',
                startData: 'Дизайн-макет, ТЗ',
                progressList: [
                    'Адаптивная,кроссбраузерная верстка лендинга. Для каждого экрана и отдельных повторяющихся элементов был создан компоненент на Vue.JS CLI.',
                    `Программирование интерактивных элементов: создание бургера, мобильного меню, формы подписки в модальном окне, двух видов слайдеров, аккордеона часто 
                        задаваемых вопросов`

                ],
                rezult: 'Landing page',
                href: 'https://nervous-mayer-ae55d2.netlify.app/'
            },
            {
                id: 10,
                imgName: 'Evraz',
                title: '3D Landing Page',
                startData: 'Дизайн-макет, ТЗ',
                progressList: [
                    `Создание трехметной сцены для лендинга: пользователь движется железной дорогой по холмистой местности к городу возможнотей. 
                        Цвета и окружение серо-стальные, что соответствует направлению компании. По ходу следования пользователя появляются тексты, цитаты, картинки и 
                        другая инфографика. Фотографии кликабельные, их можно развернуть в модальном окне.`,
                    `Программирование остановок, на которых появляется верстка. На остановках есть её подробное описание, истории персонажей, которые разворачиваются 
                        при повороте камеры направо, слайдер с картинками слева. Перед остановками есть дополнительные экраны с информацией. 
                        Лендинг также содержит множество интерактивных элементов: слайдеры, модальные окна, меню, переходы на остановки, интерактивная карта пути и прочие.`,
                    'Адаптивная,кроссбраузерная верстка'
                ],
                rezult: '3D Landing page',
                href: 'https://evraz.forbes.ru/'
            },
            {
                id: 11,
                imgName: 'EarthGlobe',
                title: 'Интрерактивная анимация главного экрана с 3D сценой',
                startData: 'Дизайн-макет, ТЗ',
                progressList: [
                    'Создание трехметной сцены на three.js: модель планеты Земля с двойной прозрачностью, автоматически вращается. Планета интерактивная: можно крутить в разные стороны, задана инерция. На внешней стороне шара расположены кликабельные асинхронно пульсирующие точки обозначающие города.',
                    'Программирование взаимодействия интерфейса и 3D модели, создание анимаций. На экране расположены плашки со странами с анимацией при нажатии. Запрограммировано взаимодействие точек на карте земного шара с информацией на экране и наоборот.',
                    'Создание адаптива.'
                ],
                rezult: 'Главный экран с анимаиями и 3D сценой',
                href: 'https://kingarthur-it.github.io/EarthMap/'
            },
            {
                id: 12,
                imgName: 'BuildingInspection',
                title: 'Работа front-end разработчиком в команде компании Maricano Digital над SPA "Building Inspections" на VueJS.',
                startData: 'ТЗ, Backend API',
                progressList: [
                    'Разработка новых компонент, добавление и улучшение функциональности приложения, командная работа github, Bootstrap.',
                    'Работа с Vuex, Router, LocalStorage, URLs',
                    'Работа с API, разработка UI для отображения/добавления/редактирования/удаления данных, реализация поиска/пагинации, всплываюшие окна, i18n',
                    'Создание модальных окон, аккордеонов, таблиц',
                    'Валидация данных, OAuth, Google ReCapture'
                ],
                rezult: 'Single Page Application',
                href: ''
            },
            {
                id: 13,
                imgName: 'mealco',
                title: 'Landing page on NuxtJS',
                startData: 'Дизайн-макет, ТЗ',
                progressList: [
                    'Создание ряда пользовательских UI компонент, сладеров, форм без использования UI фреймворков',
                    'Создание анимаций (по скроллу, перехода страниц, UI элементов, плавающих элементов)',
                    'Адаптивная, кроссбраузерная верстка',
                ],
                rezult: 'SSR Landing page',
                href: 'https://mealco.co/'
            },
        ]

        function MoreEvent(){
            if (showCasesStep + showCasesCount.value <= projectsList.length){
                showCasesCount.value += showCasesStep
            }
            else {
                showCasesCount.value = projectsList.length;
            }
        }

        return {
            showCasesCount,
            showCasesStep,
            getImageUrl,
            MoreEvent,
            projectsList
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
  transition: all 1.5s ease-in-out; }
  .case-item.anim-active {
    transform: translateX(0%); }
  .case-item__title {
    font-size: 28px;
    margin: 0;
    margin-bottom: 4%; }
  .case-item__img {
    flex-basis: 33%;
    width: 33%;
    overflow: hidden; }
    .case-item__img img {
      width: 100%;
      border-radius: 10px;
      opacity: 0;
      transform: scale(2);
      transition: all 1.5s ease-in-out;
       }
      .case-item__img img.anim-active {
        opacity: 1;
        transform: scale(1); }
  .case-item__description {
    font-size: 18px;
    flex-basis: 60%; }
  .case-item__text {
    margin: 0;
    line-height: 1.5;
    margin-bottom: 1%; }
  .case-item__link {
    margin-top: 2%;
    cursor: pointer;
    display: block;
    font-weight: bold; }
    .case-item__link:hover {
      color: var(--third); }

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
</style>