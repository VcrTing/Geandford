<template>
    <div class="td-item-wrapper">
        <collapse>
            <collapse-td-item :def="true">
                <div slot="tit" class="fx-l hand">
                    <div class="pl b h6">
                        <slot name="tit"></slot>
                    </div>
                    <span class="px_n"></span>
                    <div>
                        <slot name="sts"></slot>
                    </div>
                </div>
                <div slot="extra">
                    <slot name="extra"></slot>
                </div>
                <div slot="cont">
                    <div class="tiw-td">
                        <slot name="cont"></slot>
                    </div>
                </div>
            </collapse-td-item>
        </collapse>
    </div>
</template>

<script>
import Collapse from '../../../ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../ui/collapse/table/CollapseTdItem.vue'
export default {
  components: { Collapse, CollapseTdItem },
}
</script>

<style>

</style>