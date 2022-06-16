<template>
    <i @click="$emit('tap')">
        <div class="i-icing">
            <img v-if="_name == '日報表'" src="../../../assets/icon_img/card_plan/日報表.png">
            <img v-else-if="_name == '地盤巡視紀錄'" src="../../../assets/icon_img/card_plan/地盤巡視紀錄.png">
            <img v-else-if="_name == '確認口頭指令'" src="../../../assets/icon_img/card_plan/確認口頭指令.png">
            <img v-else-if="_name == '要求檢驗審視'" src="../../../assets/icon_img/card_plan/要求檢驗審視.png">
            <img v-else-if="_name == '要求指令及設計方案'" src="../../../assets/icon_img/card_plan/要求指令及設計方案.png">
            <img v-else-if="_name == '要求施工方案_設計以及資訊'" src="../../../assets/icon_img/card_plan/要求施工方案_設計以及資訊.png">
        </div>
    </i>
</template>

<script>
export default {
    props: {
        _name: {
            type: String,
            default: 'left'
        }
    }
}
</script>

<style lang="sass" scoped>

</style>