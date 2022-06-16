<template>
    <div v-if="!ioad">
        <div class="fx-s">
            <p class="w-37">
                <b>標題：</b><span>{{ one.title }}</span>
            </p>
            <p class="w-31">
                <b>日期：</b><span>{{ one.submission_date }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <p>
            <b>參考編號：</b><span>{{ one.uid }}</span>
        </p>
        <div>
            <b>關於上次提交資料的參考編號：</b><span>{{ one.last_ref_no }}</span>
        </div>
    </div>
    <div v-else>
        <div class="fx-s">
            <p class="w-37"><b>標題：</b><span>...</span></p>
            <p class="w-31"><b>日期：</b><span>...</span></p>
            <p class="w-32"></p>
        </div>
        <p><b>參考編號：</b><span>...</span></p>
        <div><b>關於上次提交資料的參考編號：</b><span>...</span></div>
    </div>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    components: { 
        Loading
    },
    props: {
        ioad: { 
            type: Boolean },
        one: {
            type: Object,
        }
    }
}
</script>

<style>

</style>