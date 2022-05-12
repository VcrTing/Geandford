<template>
    <nav class="card-def" contenteditable="true">
        <div class="pro-avatar hand" @click="choise">
            <!--div :style="{
                'background-image': 'url(../../../../assets/project_cover/1.jpg)'
            }"></div-->
            <img v-if="avatar == 1" src="@/assets/project_cover/1.jpg">
            <img v-else-if="avatar == 2" src="@/assets/project_cover/2.jpg">
            <img v-else-if="avatar == 3" src="@/assets/project_cover/3.jpg">
            <img v-else-if="avatar == 4" src="@/assets/project_cover/4.jpg">
            <img v-else-if="avatar == 5" src="@/assets/project_cover/5.jpg">
            <img v-else-if="avatar == 6" src="@/assets/project_cover/6.jpg">
            <img v-else-if="avatar == 7" src="@/assets/project_cover/7.jpg">
            <img v-else-if="avatar == 8" src="@/assets/project_cover/8.jpg">
            <img v-else-if="avatar == 9" src="@/assets/project_cover/9.jpg">
        </div>

        <div class="pro-cont">
            <nav class="fx-s fx-t">
                <div class="w-65">
                    <h4 @click="choise">{{ one.name }}</h4>
                </div>
                <h4 class="w-35 t-r pro-i">
                    &nbsp;
                    <ui-opera-dropdown>
                        <icon-menu :named="'more'"></icon-menu>
                    </ui-opera-dropdown>
                </h4>
            </nav>
            <div class="w-75 pro-sub">
                <span class="sub">
                    {{ one.location.address }}
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
import UiOperaDropdown from '../../../ui_element/dropdown/UiOperaDropdown.vue'
import IconMenu from '../../../ui_static/icon/IconMenu.vue'
export default {
  components: { IconMenu, UiOperaDropdown },
    props: [ 'one' ],
    methods: {
        choise() { this.$emit('choise', this.one) }
    },
    computed: {
        avatar() {
            let src = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
            return src[ Math.floor( Math.random() * src.length ) ]
        }
    }
}
</script>

<style>

</style>