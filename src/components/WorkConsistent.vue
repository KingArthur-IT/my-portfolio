<template>
    <section class = "section colored-sect">
        <h2 class="title">Принципы работы</h2>
        <div class="anim-item title-underline"></div>
        <div class="work-wrapper">
            <div class="work-item anim-item">
                <h2 class="work-item__number">- 01 -</h2>
                <h3 class="work-item__title">Максимальная вовлеченность в ваш бизнес</h3>
            </div>
            <div class="work-item anim-item">
                <h2 class="work-item__number">- 02 -</h2>
                <h3 class="work-item__title">Постоянная обратная связь в удобных для Вас каналах коммуникации</h3>
            </div>
            <div class="work-item anim-item">
                <h2 class="work-item__number">- 03 -</h2>
                <h3 class="work-item__title">Гибкая система оплаты</h3>
            </div>
            <div class="work-item anim-item">
                <h2 class="work-item__number">- 04 -</h2>
                <h3 class="work-item__title">Обучение работы с сайтом</h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.work-wrapper {
  display: flex;
  justify-content: space-around; }

.work-item {
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  border-radius: 10%;
  font-size: 18px;
  padding: 25px 15px;
  background-color: #fff;
  transform: translateY(-50px);
  opacity: 0;
  transition: all 0.7s ease;
  color: #000;
  min-height: 250px; }
  .work-item.anim-active {
    transform: translateY(0px);
    opacity: 1; }
  .work-item:hover {
    transform: translateY(30px);
    background-color: var(--third);
    color: #fff; }
  .work-item__number {
    padding: 0;
    margin: 0;
    display: block;
    font-size: 24px;
    align-self: center;
    margin-bottom: 20px; }
  .work-item__title {
    padding: 0;
    margin: 0;
    text-align: center; }

@media screen and (min-width: 1201px) {
  .work-item {
    padding: 50px 15px; } }

@media screen and (max-width: 1200px) {
  .work-item {
    flex-basis: 23%;
    flex-wrap: wrap; } }

@media screen and (max-width: 1000px) {
  .work-wrapper {
    display: flex;
    flex-wrap: wrap; }
  .work-item {
    flex-basis: 40%;
    min-height: 220px;
    margin-top: 20px; } }

@media screen and (max-width: 800px) {
  .work-item {
    flex-basis: 46%; } }

@media screen and (max-width: 500px) {
  .work-item {
    flex-basis: 95%; }
    .work-item:hover {
      transform: translateY(0px); } }

</style>