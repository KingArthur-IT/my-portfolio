<template>
    <div class="lang-wrapper">
        <div class="option-wrapper">
            <div v-for="(option, i) in optionsList" :key="i" 
                 class="option"
                 @click="changeOption(option)"
            >
                {{option}}
            </div>
        </div>
        <div class="select">{{$i18n.locale}}</div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
export default {
    setup(){
        const { locale } = useI18n({ useScope: 'global' });
        const currentLocale = ref(locale.value);
        const optionsList = ref(['uk', 'ru', 'en'].filter(item => item !== currentLocale.value));
        const changeOption = (option) => {
            locale.value = option;
        }

        // Watch для отслеживания изменений в locale.value
        watch(locale, (newLocale) => {
            currentLocale.value = newLocale;
            optionsList.value = ['uk', 'ru', 'en'].filter(item => item !== newLocale);
        });

        return {
            optionsList,
            changeOption
        }
    }
}
</script>

<style scoped>
.lang-wrapper{
    position: fixed;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    z-index: 20;
}
.lang-wrapper .select{
    position: fixed;
    background: var(--first);
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    appearance: none;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
}
.lang-wrapper:hover select{
    color: var(--third);
}
.option-wrapper{
    position: fixed;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    top: 60px;
    width: 60px;
    transform: scaleY(0);
    transform-origin: 0% 0%;
    border-top: 1px solid #fff;
}
.lang-wrapper:hover .option-wrapper,
.option-wrapper:hover{
    transform: scaleY(1);
}
.option{
    background: var(--first);
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    padding: 10px;
}
.option:hover{
    color: var(--third);
}
</style>