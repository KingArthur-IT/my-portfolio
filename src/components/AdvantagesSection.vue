<template>
    <div class="section advantages">
        <div class="advantages__item">
            <div class="advantages__text">{{ $t("message.experience") }}</div>
            <span>>1,5 {{ $t("message.yearShort") }}</span>
        </div>
        <div class="advantages__item">
            <div class="advantages__text">{{ $t("message.doneProjects") }}</div>
            <a href="#cases" rel="noopener noreferrer">
                <span>40 +</span>
            </a>
        </div>
        <div class="advantages__item">
            <div class="advantages__text">{{ $t("message.reviewsCount") }}</div>
            <a href="https://freelancehunt.com/freelancer/KingArthur.html" target="_blank" rel="noopener noreferrer">
                <span>20 +</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.advantages{
    display: flex;
    min-height: 0;
    background: #ffed40;
}
.advantages__item{
    flex-basis: 33%;
    text-align: center;
    font-size: 24px;
}
/* .advantages__text{
} */
.advantages__item span{
    color: var(--second);
    font-size: 40px;
    font-weight: 900;
    margin-top: 15px;
    display: block;
}

@media screen and (max-width: 768px) {
.advantages{
   flex-direction: column;
   align-items: center;
}
.advantages__item{
    flex-basis: 100%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}
.advantages__item span{
    font-size: 24px;
    font-weight: 900;
    margin-left: 15px;
    margin-top: 0;
}
}

@media screen and (max-width: 550px) {
.advantages__item{
    flex-direction: column;
}
}
</style>