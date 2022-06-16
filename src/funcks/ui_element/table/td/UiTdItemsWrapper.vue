<template>
    <div class="td-item-wrapper">
        <collapse>
            <collapse-td-item :def="true">
                <div slot="tit" class="fx-l hand">
                    <div class="pl b h6">
                        <span class="t-cap">{{ tit }}</span>
                        <span v-if="index">_{{ index + 1 }}</span>
                    </div>
                </div>
                <div slot="cont">
                    <div :class="{ 'tiw-td': !is_nuii }">
                        <slot></slot>
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
    props: {
        tit: { type: String, default: '項目' },
        index: { type: Number, default: 1 },
        is_nuii: { type: Boolean }
    },
    computed: {

    }
}
</script>

<style>

</style>