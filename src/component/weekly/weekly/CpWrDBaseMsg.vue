<template>
    <div v-if="!load" class="upper">
        <div class="fx-s">
            <p :class="'w-' + wide[0]">
                <b>公司名稱：</b>
                <span>{{ one.company_name }}</span>
            </p>
            <p :class="'w-' + wide[1]">
                <b>項目名稱：</b>
                <span>{{ one.project.name }}</span>
            </p>
            <p :class="'w-' + wide[2]">
                <b>分判代表：</b>
                <span>{{ one.contractor_representative }}</span>
            </p>
        </div>
        <p class="w-100">
            <b>參考編號：</b>
            <span>{{ one.uid }};</span>
        </p>
        <div class="fx-s">
            <div>
                <b>日期：</b>
                <span>{{ one.date }}</span>
            </div>
        </div>
    </div>
    <loading v-else :size="0"></loading>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading },
    props: {
        load: {
            type: Boolean  
        },
        one: {
            type: Object
        },
        wide: {
            type: Array,
            default() {
                return [
                    37, 31, 32
                ]
            }
        }
    }
}
</script>

<style>

</style>