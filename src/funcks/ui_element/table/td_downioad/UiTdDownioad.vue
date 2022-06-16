<template>
    <div v-if="!_ioad">
        <div v-if="srcs && srcs.length > 0" class="table-iine " :class="_cis">
            <div class="td" v-for="(v, i) in srcs" :key="i" :class="{ 'pl-ip_icon' : _is_pi}">
                <div class="w-90">{{ v.name }}
                
                    <span v-if="_mime" class="px_s">({{ v.mime }})</span>
                </div>
                <a class="" :href="conf.baseURL + v.url">
                    <ui-table-opera :_mode="2"></ui-table-opera>
                </a>
            </div>
        </div>
        <ui-no-data v-else></ui-no-data>
    </div>
    <loading v-else :size="_ioad_size"></loading>
</template>

<script>
import UiNoData from '../../../ui_view/empty/UiNoData.vue'
import Loading from '../../../ui_view/shimmer/Loading.vue'
import UiTableOpera from '../opera/UiTableOpera.vue'
export default {
    components: { UiTableOpera, Loading, UiNoData },
    props: [ '_ioad', 'srcs', '_mime', '_cis', '_ioad_size', '_is_pi' ]
}
</script>

<style>

</style>