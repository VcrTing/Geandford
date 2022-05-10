<template>
    <div>
        <panel-def>
            <div class="fx-s">
                    <button class="btn-def">普通按钮</button>
                    <button class="btn-pri btn-def">主题按钮</button>
                    <button class="btn-pri btn-def fx-l">
                        <i class="mdi mdi-chevron-left"></i>&nbsp;&nbsp;有边框按钮</button>
                    <button class="btn-pri-out btn-def fx-l">
                        <i class="mdi mdi-message-arrow-left"></i>&nbsp;&nbsp;有边框按钮</button>
                    <button class="btn-sec btn-def">SEC按钮</button>
                    <button class="btn-acc btn-def">ACC按钮</button>
            </div>
            <div class="fx-s pt">
                <div class="fx-l">
                    <button class="btn-pri btn-icon"><i class="mdi mdi-gamepad-left"></i></button>
                    <span class="pl_s">游戏机</span>
                </div>
                <button class="btn-sec btn-icon"><i class="mdi mdi-hand-front-left"></i></button>
                <button class="btn-acc btn-icon"><i class="mdi mdi-chevron-double-left"></i></button>
            </div>

            <div class="pt">
                <p>普通文字：文字是人类用符号记录表达信息以传之久远的方式和工具。现代文字大多是记录语言的工具。人类往往先有口头的语言后产生书面文字，很多小语种，有语言但没有文字。文字的不同体现了国家和民族的书面表达的方式和思维不同。文字使人类进入有历史记录的文明社会。.</p>
                <p class="sub">灰文字：文字是人类用符号记录表达信息以传之久远的方式和工具。现代文字大多是记录语言的工具。人类往往先有口头的语言后产生书面文字，很多小语种，有语言但没有文字。文字的不同体现了国家和民族的书面表达的方式和思维不同。文字使人类进入有历史记录的文明社会。.</p>
                <p class="sus">白文字：文字是人类用符号记录表达信息以传之久远的方式和工具。现代文字大多是记录语言的工具。人类往往先有口头的语言后产生书面文字，很多小语种，有语言但没有文字。文字的不同体现了国家和民族的书面表达的方式和思维不同。文字使人类进入有历史记录的文明社会。.</p>
            </div>
            <div class="pt fx-s">
                <div class="w-333">
                    <ui-inline-input-fill :header="'用户名称'">
                        <input class="input">
                    </ui-inline-input-fill>
                </div>
                <div class="w-333">
                    <ui-inline-input-fill :header="'用户密码'">
                        <ui-icon-input :_right="true" class="user">
                            <input class="input">
                        </ui-icon-input>
                    </ui-inline-input-fill>
                </div>
                <div class="w-333">
                    <ui-inline-input-fill :header="'确认密码'">
                        <ui-icon-input :icon="'user'">
                            <input class="input">
                        </ui-icon-input>
                    </ui-inline-input-fill>
                </div>
            </div>
        </panel-def>
        <panel-def>
            <div class="fx-l">
                <icon-auth class="" :named="'eye'"></icon-auth>
                <span class="pl">眼睛</span>
            </div>
        </panel-def>
    </div>
</template>

<script>
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import UiIconInput from '../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInlineInputFill from '../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import IconAuth from '../../../funcks/ui_static/icon/IconAuth.vue'
export default {
  components: { PanelDef, UiInlineInputFill, UiIconInput, IconAuth },

}
</script>

<style>

</style>