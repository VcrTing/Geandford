<template>
    <div>
        <div v-if="typed == 1" class="fx-l">
            <div class="cd-icon"></div>
            <h6 class="fx-1 pl_x2">
                要求施工方案设计以及咨询
            </h6>
        </div>
        <div v-if="typed == 2" class="fx-l">
            <div class="cd-icon"></div>
            <h6 class="fx-1 pl_x2">
                要求指令及设计方案
            </h6>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        typed: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="sass" scoped>
.cd-icon
    width: 2.8em
    height: 2.8em
    background: #f8f8f8
</style>