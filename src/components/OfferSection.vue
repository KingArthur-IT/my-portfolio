<template>
    <section class = "section colored-sect" id = "offer">
        <img src="@/assets/img/decoration-offer-left.svg" alt="" class="decoration-img decoration-left">
        <img src="@/assets/img/decoration-offer-right.svg" alt="" class="decoration-img decoration-right">
        <h2 class="title">Что я могу Вам предложить?</h2>
        <div class="anim-item title-underline"></div>
        <h3 class="wrapper-title">Создание веб-сайтов и веб-приложений</h3>
        <div class="sites-wrapper">
            <div class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">                
                <div class = "item-title">Landing Page</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    Веб-страница, основной задачей которой является целевое действие: сбор контактных данных целевой аудитории, подписка, реклама продукта, его покупка.
                </p>
            </div>
            <div class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">
                <div class="item-title">Сайт визитка</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    Отличное решение для правильного позиционирования Вашего бренда.
                </p>
            </div>
            <div class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">
                <div class="item-title">3D сцены</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    Создание 2D и 3D сцен, симуляций, анимаций или демонстраций на основе JS, WebGL, Three.js.
                </p>
            </div>
        </div>
        <h3 class="wrapper-title">Что включает в себя продакшн продукта?</h3>
        <div class="sites-wrapper">
            <div class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">
                <div class="item-title">Адаптивность</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    Ваш сайт будет корректно отображаться на экранах всех смартфонов, планшетов и ПК. Все для удобство Ваших клиентов.
                </p>
            </div>
            <div class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">
                <div class="item-title">Кроссбраузерность</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    Ваш сайт будет правильно отображаться во всех современных браузерах и на различных операционных системах.
                </p>
            </div>
            <div class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">
                <div class="item-title">Анимация</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    Анимации, интересные итерактивные элементы, 3D модели на сайте повышают интерес к вашему продукту и 
                    доверие потенциальных клиентов к Вашем бизнесу. А доверие приносит прибыль!
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
#offer {
  background: url('@/assets/img/6.jpg') center no-repeat;
  background-size: cover;
  width: 100%;
  background-attachment: fixed; 
}

.sites-wrapper {
  display: flex;
  justify-content: space-around;
  text-align: center;
  min-height: 250px; 
}
.sites-wrapper__item {
    flex-basis: 25%;
    margin-bottom: 20px;
    position: relative;
    background: var(--third);
    display: block;
    transform: perspective(1px) translateZ(0);
    font-size: 24px;
    font-weight: 900;
    padding: 20px;
    padding-top: 40px;
    transform: translateY(30px);
    transition: transform 0.5s ease-in-out;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px var(--first);
    min-height: 250px; 
}
.sites-wrapper__item:before {
    content: '';
    position: absolute;
    background: #fff;
    transform: scaleY(1);
    transform-origin: 0 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.6s ease-out;
    padding-top: 70px;
    color: #070606;
    z-index: -1;
    border-radius: 10px; 
}
.sites-wrapper__item:hover::before {
    transform: scaleY(0); 
}
.sites-wrapper__item:hover {
    color: #fff; 
}
.sites-wrapper__item.anim-active {
    transform: translateY(0px); 
}

.wrapper-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px; 
}

.item-underline {
  display: block;
  height: 2px;
  width: 50%;
  margin: auto;
  background-color: #fff;
  margin-top: 15px; 
}

.item-description {
  font-size: 18px;
  font-weight: normal; 
}
.item-description:hover {
    color: #fff; 
}

@media screen and (max-width: 1150px) {
    .sites-wrapper__item {
        flex-basis: 30%; 
    } 
}

@media screen and (max-width: 900px) {
    .sites-wrapper {
        flex-direction: column; 
    }
    .sites-wrapper__item {
        width: 80%;
        margin: auto;
        margin-bottom: 20px; 
    } 
}

@media screen and (max-width: 475px) {
    .sites-wrapper__item {
        width: 95%; 
    }
    .item-title {
        font-size: 22px; 
    } 
}

.paperclip {
  position: absolute;
  top: -10px;
  right: 0px;
  width: 35px;
  height: 35px;
  transform: rotateZ(-45deg); 
}

</style>