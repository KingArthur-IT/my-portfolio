<template>
    <footer class = "footer">
        <div class="footer-wrap">
            <div class="footer__info">
                <div class="info-name">{{ $t("message.myName") }} | Frontend developer</div>
                <div class="info-description">(c) {{currentYear}}</div>
            </div>
            <div class="footer__socials">
                <a href="https://telegram.me/SantasDeer">
                    <img src="@/assets/img/socials/telegram_icon.svg" alt="" class="socials-img">
                </a>
                <a href="https://www.instagram.com/king_arthur2017">
                    <img src="@/assets/img/socials/instagram_icon.svg" alt="" class="socials-img">    
                </a>
                <a href="https://www.facebook.com/profile.php?id=100048966681536">
                    <img src="@/assets/img/socials/facebook_icon.svg" alt="" class="socials-img">
                </a>
                <a href="mailto:ostapenko.web.7@gmail.com">
                    <img src="@/assets/img/socials/google_icon.svg" alt="" class="socials-img">
                </a>
                <a href="https://github.com/KingArthur-IT">
                    <img src="@/assets/img/socials/github_icon.svg" alt="" class="socials-img">
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  setup(){
    const currentYear = new Date().getFullYear()

    return{
      currentYear
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 20px 100px 30px; }
  .footer-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px; }
  .footer__info {
    display: flex;
    flex-direction: column; }

.info-name {
  margin-bottom: 5px; }

.info-description {
  margin-bottom: 5px; }

.socials-img {
  width: 40px;
  margin-left: 10px;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.5s ease; }
  .socials-img:hover {
    border: 1px solid #000;
    transform: translateY(-30%); }

.footer-end {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto; }
  .footer-end__line {
    height: 1px;
    width: 100%;
    margin: 10px 0px;
    background-color: #000; }
  .footer-end__info {
    text-align: center; }

@media screen and (max-width: 800px) {
  .footer {
    padding: 20px 0px 30px; }
    .footer-wrap {
      flex-direction: column-reverse; }
    .footer__info {
      margin: auto;
      text-align: center; }
    .footer__socials {
      margin: auto;
      margin-bottom: 15px; }
  .socials-img {
    margin-left: 5px; } }

</style>