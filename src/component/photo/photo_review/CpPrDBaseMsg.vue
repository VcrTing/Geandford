<template>
    <div v-if="!load">
        <div class="fx-s">
            <p class="w-37">
                <b>項目名稱：</b><span>{{ one.project.name }}</span>
            </p>
            <p class="w-31">
                <b>日期：</b><span>{{ one.date }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <p class="w-100">
            <b>參考編號：</b><span>{{ one.uid }}</span>
        </p>
        <div class="fx-l fx-t pt">
            <div class="w-5em">主題：</div>
            <div class="fx-1 fx-l row_x2">
                <div class="w-333 px_s" v-for="(v, i) in types" :key="i" :class="{ 'd-n': !v }">
                    <ui-card-icon-photo class="td-iin" :name="i" :vai="v"></ui-card-icon-photo>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="fx-s">
            <p class="w-37"><b>項目名稱：</b>...</p>
            <p class="w-31"><b>日期：</b>0000-00-00</p>
            <p class="w-32"></p>
        </div>
        <p class="w-100"><b>參考編號：</b>...</p>
        <loading :size="0"></loading>
    </div>
</template>

<script>
import UiCardIconPhoto from '../../../funcks/ui/card_icon/photo/UiCardIconPhoto.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { UiCardIconPhoto, Loading },
    props: [ 'one', 'load' ],
    computed: {
        types() {
            return this.one.type
        }
    }
}
</script>

<style>

</style>