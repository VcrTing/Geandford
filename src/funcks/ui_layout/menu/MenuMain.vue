<template>
    <div class="menu-main">

        <div class="logo">
            <logo></logo>
        </div>
        
        <div class="menu-hr"></div>
        <menu-main-inner class="pt"></menu-main-inner>
        <div class="menu-hr"></div>
        <menu-main-inner class="py" :menu="menu_special"></menu-main-inner>

        <!-- 用戶問題 -->
        <div class="menu-space"></div>
        <menu-auth-card></menu-auth-card>
    </div>
</template>
<script>
import Logo from '../../ui_static/logo/Logo.vue'
import MenuAuthCard from './auth/MenuAuthCard.vue'
import MenuMainInner from './inner/MenuMainInner.vue'
export default {
  components: { Logo, MenuMainInner, MenuAuthCard },
  data() {
      return {
            menu_special: [

                {
                    txt: '施工合約', icon: '',
                    index: 111, link: '/admin/construction_contract/'
                },
                {
                    txt: '工程支出', icon: '',
                    index: 112, link: '/admin/engineering_cost/'
                },
            ]
      }
  }
}
</script>