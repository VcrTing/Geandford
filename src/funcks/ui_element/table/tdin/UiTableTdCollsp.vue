<template>
    <collapse>
        <collapse-td-item :def="true">
            <div slot="tit" class="fx-l hand">
                <div class="pl b h6">
                    <slot name="tit"></slot>
                </div>
            </div>
            <div slot="cont">
                <div class="td-collsp-td">
                    <slot name="td"></slot>
                </div>
                <div class="td-collsp-sub">
                    <slot name="sub"></slot>
                </div>
            </div>
        </collapse-td-item>
    </collapse>
</template>

<script>
import Collapse from '../../../ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../ui/collapse/table/CollapseTdItem.vue'
import IconDirection from '../../../ui_static/icon/IconDirection.vue'
export default {
  components: { Collapse, CollapseTdItem, IconDirection },

}
</script>

<style>

</style>