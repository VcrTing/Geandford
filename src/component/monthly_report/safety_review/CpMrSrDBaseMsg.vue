<template>
    <div v-if="!load">

        <div class="fx-s">
            <p class="w-37">
                <b>承包商名稱：</b>{{ one.report_abstract }}
            </p>
            <p class="w-31">
                <b>項目名稱：</b>{{ one.project.name }}
            </p>
            <p class="w-32"></p>
        </div>

        <div>
            <b>參考編號：</b>{{ one.uid }}
        </div>
    </div>
    <div v-else>
        <div class="fx-s">
            <p class="w-37"><b>承包商名稱：</b>...</p>
            <p class="w-31"><b>項目名稱：</b>...</p>
            <p class="w-32"></p>
        </div>
        <div><b>參考編號：...</b></div>
    </div>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    components: { 
        Loading
    },
    props: {
        
        load: { type: Boolean },
        one: {
            type: Object,
            default() {
                return {
                    uid: 'ss-0002;user-0001',
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