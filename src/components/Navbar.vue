<template>
    <div class="nav-bar" :class="{'clicked': navbarShown}">
        <div class="nav-bar__btn" @click="navbarClick">
            <Hamburger :isActive="navbarShown"/>
        </div>
        <nav class="menu" :class="{'clicked': navbarShown}">
            <div class="menu__item">
                <a href="#about-me" class="menu-link">
                    {{ $t("message.aboutMe") }}
                </a>
            </div>
            <div class="menu__item">
                <a href="#offer" class="menu-link">
                    {{ $t("message.offer") }}
                </a>
            </div>
            <div class="menu__item">
                <a href="#cases" class="menu-link">
                    {{ $t("message.cases") }}
                </a>
            </div>
            <div class="menu__item">
                <a href="#contacts" class="menu-link">
                    {{ $t("message.contacts") }}
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
import { ref } from 'vue'
import Hamburger from '@/components/UIKit/Hamburger.vue'
export default {
    components:{
        Hamburger
    },
    setup(){
        let navbarShown = ref(false);
        const navbarClick = () => {
            navbarShown.value = !navbarShown.value;
        }

        return{
            navbarShown, 
            navbarClick
        }
    }
}
</script>

<style scoped>
.nav-bar{
    display: flex;
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 12;
}
.nav-bar__btn{
    height: 100%;
    width: 60px;
    background-color: var(--first);
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    z-index: 50;
}
.menu{
    width: 0%;
    height: 100%;
    background-color: var(--first);
    transition: all 1.5s cubic-bezier(0.8, 1.62, 0, 0.68);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Russo One', sans-serif;
}
.menu__item{
    display: block;
    text-transform: uppercase;
    font-size: 0px;
    transition: font-size 0.5s ease-in-out;
}
.menu.clicked{
    width: 100%;
    margin-right: 59px;
}
.menu-link{
    color: #fff;
    text-decoration: none;
}
.menu-link:hover{
    color: var(--third)
}
.clicked .menu__item{
    font-size: 18px;
}
.menu-btn-line{
    background-color: #ffffff;
    height: 2px;
    width: 40px;
    top: 30px;
    left: 10px;
    transition: all 1s ease-in-out;
}
.clicked .menu-btn-line:nth-child(2){
    height: 1px;
    top: 59px;
    left: 0px;
    width: 60px;
}

@media screen and (max-width: 740px) {
    .clicked .menu__item{
        font-size: 16px;
    }
}

@media screen and (max-width: 600px) {
    .clicked .menu__item{
        font-size: 14px;
    }
}

@media screen and (max-width: 500px) {
    .clicked .menu__item:nth-child(1){
        display: none;
    }
}

@media screen and (max-width: 400px) {
    .clicked .menu__item:nth-child(2){
        display: none;
    }
}
</style>