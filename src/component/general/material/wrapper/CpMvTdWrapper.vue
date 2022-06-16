<template>
    <ui-td-item-wrapper>
        <div slot="tit">
            {{ _item.material_name }}<span class="px n">Item Id:&nbsp;{{ _item.item_id }}</span>
        </div>
        <div slot="extra" class="pl_x3 pt_x">
            <cp-mv-td-extra-paner :one="_item"></cp-mv-td-extra-paner>
        </div>
        <div slot="cont">
            <slot></slot>
        </div>
    </ui-td-item-wrapper>
</template>

<script>
import UiTdItemWrapper from '../../../../funcks/ui_element/table/td/UiTdItemWrapper.vue'
import CpMvTdExtraPaner from './CpMvTdExtraPaner.vue'
export default {
  components: { UiTdItemWrapper,
    CpMvTdExtraPaner     },
    data() { return { } },
    
    computed: {
        
    },  
    props: {
        _item: { type: Object },
        index: { type: Number }
    }
}
</script>

<style>

</style>