<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>項目名稱：</b><span>Kings project</span>
            </p>
            <p class="w-31">
                <b>日期：</b><span>2022-12-12</span>
            </p>
            <p class="w-32"></p>
        </div>
        <p class="w-100">
            <b>參考編號：</b><span>pp-0001;mandd-xxx-0001</span>
        </p>
        <div class="fx-l fx-t pt">
            <div class="w-5em">主題：</div>
            <div class="fx-1 fx-l row_x2">
                <div class="w-333 px_s">
                    <ui-card-icon-photo class="td-iin" :typed="1"></ui-card-icon-photo>
                </div>
                <div class="w-333 px_s">
                    <ui-card-icon-photo class="td-iin" :typed="2"></ui-card-icon-photo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiCardIconPhoto from '../../../funcks/ui/card_icon/photo/UiCardIconPhoto.vue'
export default {
  components: { UiCardIconPhoto },

}
</script>

<style>

</style>