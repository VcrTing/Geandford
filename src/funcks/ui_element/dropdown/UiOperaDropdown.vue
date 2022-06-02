<template>
    <drop-down>
        <div slot="tit">
            <slot></slot>
        </div>
        <div slot="cont" class="fs_ipt dw-def">
            <button class="fx-l txt-pri-hv">
                <i class="mdi mdi-pen h5"></i>&nbsp;&nbsp;
                編輯
            </button>
            <hr/>
            <button class="fx-l txt-pri-hv">
                <i class="mdi mdi-trash-can h5"></i>&nbsp;&nbsp;
                刪除
            </button>
        </div>
    </drop-down>
</template>

<script>
import DropDown from '../../ui/dropdown/DropDown.vue'
export default {
  components: { DropDown },

}
</script>

<style>

</style>