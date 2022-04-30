<template>
    <section class = "section colored-sect" id = "offer">
        <img src="@/assets/img/decoration-offer-left.svg" alt="" class="decoration-img decoration-left">
        <img src="@/assets/img/decoration-offer-right.svg" alt="" class="decoration-img decoration-right">
        <h2 class="title">{{ $t("message.whatCanIOffer") }}?</h2>
        <div class="anim-item title-underline"></div>
        <h3 class="wrapper-title">{{ $t("message.webSitesCreation") }}</h3>
        <div class="sites-wrapper">
            <div v-for="(cite, i) in citesCreationList" :key="i"
                 class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">                
                <div class = "item-title">{{ $t(`message.${cite.title}`) }}</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    {{ $t(`message.${cite.content}`) }}.
                </p>
            </div>
        </div>
        <h3 class="wrapper-title">{{ $t("message.productionRezult") }}?</h3>
        <div class="sites-wrapper">
            <div v-for="(item,i) in productionList" :key="i" 
                 class="anim-item sites-wrapper__item">
                <img src="@/assets/img/paperclip.svg" class="paperclip">
                <div class="item-title">{{ $t(`message.${item.title}`) }}</div>
                <div class="item-underline"></div>
                <p class="item-description">
                    {{ $t(`message.${item.content}`) }}.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup(){
        const citesCreationList = [
            {title: 'citesTitle', content: 'citesInfo'},
            {title: 'frameworksTitle', content: 'frameworksInfo'},
            {title: 'threeDTitle', content: 'threeDInfo'}
        ]

        const productionList = [
            {title: 'adaptiveTitle', content: 'adaptiveInProduction'},
            {title: 'useFrameworksTitle', content: 'useFrameworksInfo'},
            {title: 'animationsTitle', content: 'animationsInProduction'}
        ]

        return{
            citesCreationList,
            productionList
        }
    }
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