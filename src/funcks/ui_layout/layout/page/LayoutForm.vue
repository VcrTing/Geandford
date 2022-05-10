<template>
    <div class="pt">
        <crumbs class="pl_x2">
            <slot name="top"></slot>
        </crumbs>

        <div class="panel-form mt px_x2 py">
            <h3>{{ header }}</h3>
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script>
import CollapseCardItem from '../../../ui/collapse/card/CollapseCardItem.vue'
import Collapse from '../../../ui/collapse/Collapse.vue'
import Crumbs from '../../menu/crumbs/Crumbs.vue'
export default {
    props: {
        header: { type: String }
    },
  components: { Crumbs, Collapse, CollapseCardItem },

}
</script>

<style>

</style>