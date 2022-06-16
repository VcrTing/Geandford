<template>
    <div>
        <h4 class="pb">照片</h4>
        <div class="table-iine" v-if="!load">
            <div class="td" v-for="(v, i) in one.image" :key="i">
                <div class="w-90">
                    <span v-if="v.image">{{ v.image.name }}</span>&nbsp;({{ v.description }})
                </div>
                <div class="w-10">
                    <a :href="conf.baseURL + v.image.url" v-if="v.image">
                        <ui-table-opera :_mode="2"></ui-table-opera>
                    </a>
                </div>
            </div>
        </div>
        <loading v-else :size="0"></loading>
    </div>
</template>

<script>
import UiTableOpera from '../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { UiTableOpera, Loading },
    props: {
        load: { type: Boolean },
        one: { 
            type: Object,
            default() {
                return {
                    img: '1901 安全現場.jpg'
                }
            }
        }
    }
}
</script>

<style>

</style>