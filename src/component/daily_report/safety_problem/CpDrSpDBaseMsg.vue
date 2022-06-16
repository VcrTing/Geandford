<template>
    <div v-if="!ioad">
        <div class="fx-s">
            <p class="w-37">
                <b>事件編號：</b><span>{{ one.case_id }}</span>
            </p>
            <p class="w-31">
                <b>說明：</b><span>{{ one.case_description }}</span>
            </p>
            <p class="w-32">
            </p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>相關公司名稱：</b><span>{{ one.related_company }}</span>
            </p>
            <p class="w-31">
                <b>日期：</b><span>{{ one.case_date }}</span>
            </p>
            <p class="w-32">
                <b>問題類型：</b><span>{{ one.type }}</span>
            </p>
        </div>
        <div>
            <b>事件結束：</b><span>{{ one.case_closed }}</span>
        </div>
    </div>
    <div v-else>
        <div class="fx-s">
            <p class="w-37"><b>事件編號：</b>...</p>
            <p class="w-31"><b>說明：</b>...</p>
            <p class="w-32"></p>
        </div>
        <loading :size="0"></loading>
    </div>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading },
    props: {
        ioad: { type: Boolean },
        one: {
            type: Object,
        }
    }
}
</script>

<style>

</style>