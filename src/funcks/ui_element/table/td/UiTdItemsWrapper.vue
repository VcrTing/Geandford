<template>
    <collapse class="td-collsp">
        <collapse-td-item :def="true">
            <div slot="tit" class="fx-l hand">
                <div class="pl b h6">
                    {{ tit }}<span v-if="index">_{{ index + 1 }}</span>
                </div>
                <span class="px_s"></span>
                <div v-if="status_mode == 1">
                    <button v-if="status == 0" class="btn-err py_s px_x">已逾期</button>
                </div>
            </div>
            <div slot="cont">
                <div class="td-collsp-td">
                    <slot></slot>
                </div>
                <!--div class="td-collsp-sub">
                    <button class="fx-l" @click="$emit('plus')">
                        <i class="mdi mdi-plus"></i>
                        <span class="pl_n">{{ plus }}</span>
                    </button>
                </div-->
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
    props: {
        tit: { type: String, default: '项目' },
        index: { type: Number, default: 1 },

        plus: { type: String, default: '添加项目' },

        status: { type: Number, default: -1 }, // -1 不显示
        status_mode: { type: Number , default: 1 } // 1 默认模式
    }
}
</script>

<style>

</style>