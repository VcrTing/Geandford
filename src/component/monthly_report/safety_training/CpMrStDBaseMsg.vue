<template>
    <div class="fx-s" v-if="!load">
        <div class="w-45">
            <b>參考編號：</b>{{ one.uid }}
        </div>
        <div class="w-65">
            <b>項目名稱：</b>{{ one.project.name }}
        </div>
    </div>
    <div class="fx-s" v-else>
        <div class="w-45"><b>參考編號：</b>...</div>
        <div class="w-65"><b>項目名稱：</b>...</div>
    </div>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading },
    props: {
        load: { type: Boolean },
        one: {
            type: Object,
            default() {
                return {
                    company_name: 'Wade Name',
                    project_name: '很棒的工程項目'
                }
            }
        }
    }
}
</script>

<style>

</style>