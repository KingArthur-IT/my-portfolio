<template>
    <header class="header">
        <canvas class="header__canvas" id="header-canvas"></canvas>
        <div class="header__main-info">
            <h1 class="header__title">{{ $t("message.myName") }}</h1>
            <div class = "anim-item header__line"></div>
            <h2 class = "anim-item header__subtitle">
                {{ $t("message.head1") }}<br>{{ $t("message.head2") }}
            </h2>
        </div>       
    </header>
</template>

<script setup>
import { systemOfParticles } from '@/use/useParticles';
import { onMounted } from 'vue';

onMounted(() => {
  systemOfParticles();
})

</script>

<style scoped>
.header{
    width: 100%;
    min-height: 100vh;
    font-family: 'Russo One', sans-serif;
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;
    overflow: hidden;
}
.header__canvas{
    position: absolute;
    top: 0;
    background-color: #000;
    width: 100%;
    min-height: 100vh;
    z-index: 0;
    margin: 0;
    padding: 0;
    cursor: crosshair;
}
.header__main-info{
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgba(var(--first), 0.7);
    height: auto;
    max-width: 740px;
    margin: auto;
    padding: 40px 60px;
    z-index: 10;
    user-select: none;
}
.header__title{
    display: block;
    font-size: 80px;
    font-weight: normal;
    color: #fff;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    z-index: 10;
}
.header__line{
    display: block;
    background-color: var(--third);
    height: 5px;
    width: 400px;
    max-width: 400px;
    align-self: center;
    margin-bottom: 15px;
    opacity: 0;
    transition: all 1.2s ease-in-out;
    z-index: 10;
}
.header__line.anim-active{
    opacity: 1;
}
           
.header__subtitle{
    display: block;
    color: var(--first);
    font-size: 48px;
    font-weight: normal;
    padding: 0;
    margin: 0;
    transform: translateY(-30px);
    opacity: 0;
    transition: all 1s ease-in-out;
    transition-delay: 1.2s;
    z-index: 10;
}
        
.header__subtitle.anim-active{
    transform: translateY(0px);
    opacity: 1;
}
            
@media screen and ( min-width: 1600px ){
    .header__main-info{
        margin-top: 2%;
        max-width: 1440px;
    }
    .header__title{
        font-size: 160px;
    }
    .header__line{
        width: 800px;
        max-width: 800px;
    }
    .header__subtitle{
        font-size: 72px;
    }        
}
    
@media screen and ( max-width: 740px ){
    .header{
        background: url('@/assets/img/1.jpg') center no-repeat;
        background-attachment: fixed;
    }
    .header__canvas{
        display: none;
    }
    .header__title{
        font-size: 60px;
        color: #fff;
    }
    .header__subtitle{
        font-size: 32px;
        color: var(--second);
    }
}
    
@media screen and ( max-width: 500px ){
    .header_main-info{
        padding: 40px 20px;
    }
    .header__title{
        font-size: 48px;
    }       
    .header__subtitle{
        font-size: 32px;
    } 
    .header__line{
        height: 3px;
        width: 250px;
        margin-bottom: 10px;
    }     
}
    
@media screen and ( max-width: 350px ){
    .header__title{
        font-size: 42px;
    }
    .header__subtitle{
        font-size: 28px;
    }
}
    
@media screen and ( max-width: 300px ){
    .header__title{
        font-size: 34px;   
    }
    .header__subtitle{
        font-size: 24px;
    }
    .header__line{
        height: 2px;
        width: 100px;
        margin-bottom: 5px;
    }
}
    
.list-icon{
    width: 10px;
    height: 10px;
    color: var(--second);
    margin-right: 20px;
}

</style>