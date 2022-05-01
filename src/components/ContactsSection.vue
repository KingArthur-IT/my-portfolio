<template>
    <section class = "section" id = "contacts">
        <h2 class="title">{{ $t("message.myContacts") }}</h2>
        <div class="anim-item title-underline"></div>
        <h2 class="call-to-action">{{ $t("message.writeMeToDiscuss") }}!</h2>
        <div class="contacts-wrap">
            <ul class = "contacts-list">
                <!--
                <li class = "anim-item contacts-list__item">
                    <i class="fab fa-wpforms contact-icon"></i>
                    Заполните форму обратной связи
                </li>
                -->
                <li class = "anim-item contacts-list__item">
                    <MailIcon class="contact-icon"/>
                    <a href="mailto:ostapenko.web.7@gmail.com" class = "contact-link">
                    {{ $t("message.writeMeOnEmail") }}: ostapenko.web.7@gmail.com
                    </a>
                </li>
                <li class = "anim-item contacts-list__item">
                    <TelegramIcon class="contact-icon"/>
                    <a href="https://telegram.me/SantasDeer" class = "contact-link">
                        {{ $t("message.writeOnTelegram") }}
                    </a>
                </li>
            </ul>
            <img src="@/assets/img/letters.jpg" alt="" class = "contact-img">
            <!--
            <form action="mailto:ostapenko.web.7@gmail.com" class="contact-form" method="POST">
                <input type="text" placeholder="Ваше имя" class = "form-elem contact-form__text-input" name="user_name">
                <input type="email" class = "form-elem contact-form__text-input" placeholder="Ваш e-mail">
                <textarea name="message" cols="30" rows="10" class = "form-elem contact-form__msg" placeholder="Опишите здесь Ваш проект или задайте интересующие Вас вопросы"></textarea>
                <button type="submit" class = "form-elem contact-form__btn"><i class="far fa-envelope contact-icon"></i>Отправить</button>
            </form>
            -->
        </div>
    </section>
</template>

<script>
import MailIcon from '@/components/icons/MailIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
export default {
    components:{
        MailIcon, TelegramIcon
    }
}
</script>

<style scoped>
.call-to-action {
  text-align: center;
  margin-bottom: 20px; 
}

.contacts-wrap {
  display: flex;
  justify-content: space-around; 
}

.contacts-list {
  list-style: none;
  font-size: 24px;
  flex-basis: 45%;
  padding: 0;
  margin-left: 20px; 
}
.contacts-list__item {
  margin-bottom: 15px;
  padding: 0;
  display: block;
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
  transform: translateX(-500px);
  transition: transform 0.8s ease-in-out; 
}
.contacts-list__item:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--third);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: 0% 100%;
  transition: transform 0.5s ease; 
}
.contacts-list__item:hover {
  color: #fff; 
}
.contacts-list__item:hover:before {
  transform: scaleX(1); 
}
.contacts-list__item.anim-active {
  transform: translateX(0px); }

.contact-icon {
  width: 20px;
  margin-right: 20px; }

.form-elem {
  margin-bottom: 10px;
  outline-color: var(--third);
  height: 50px; }

.contact-form {
  display: flex;
  flex-direction: column;
  flex-basis: 35%; }
  .contact-form__btn {
    font-weight: 600;
    display: block;
    position: relative;
    z-index: 0;
    cursor: pointer; }
    .contact-form__btn:before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: var(--third);
      z-index: -1;
      transform: scaleX(0);
      transform-origin: 50% 100%;
      transition: transform 0.4s ease-in-out; }
    .contact-form__btn:hover {
      color: #fff; }
      .contact-form__btn:hover:before {
        transform: scaleX(1); }
  .contact-form__msg {
    height: auto; }

.contact-link:hover {
  color: #fff; }

.contact-img {
  width: 50%; }

@media screen and (max-width: 1100px) {
  .contacts-wrap {
    justify-content: space-between; }
  .contact-form {
    flex-basis: 40%; }
  .contacts-list {
    flex-basis: 55%; } }

@media screen and (max-width: 900px) {
  .contacts-wrap {
    flex-direction: column; }
  .contact-img {
    width: 80%;
    margin: auto; 
    margin-top: 10px;
  }
  .call-to-action {
    text-align: center;
    margin-bottom: 40px; }
  .contact-form {
    width: 60%;
    margin: auto;
    margin-top: 20px; }
  .contacts-list {
    margin: auto; } }

@media screen and (max-width: 600px) {
  .contact-form {
    width: 90%; 
  } 
  .contacts-list__item {
    transform: translateX(0px);
  }
}

@media screen and (max-width: 400px) {
  .contacts-list {
    font-size: 18px; }
    .contacts-list__item {
      margin-bottom: 0px; }
  .call-to-action {
    margin: 25px auto; } }

</style>