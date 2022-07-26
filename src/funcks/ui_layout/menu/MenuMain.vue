<template>
    <div class="menu-main">

        <div class="logo">
            <logo></logo>
        </div>
        
        <div class="menu-hr"></div>
        <menu-main-inner class="py"></menu-main-inner>
        <div class="py"></div>
        <!-- 用戶問題 -->
        <div class="menu-space"></div>
        <menu-auth-card></menu-auth-card>

    </div>
</template>
<script>
import Logo from '../../ui_static/logo/Logo.vue'
import MenuAuthCard from './auth/MenuAuthCard.vue'
import MenuMainInner from './inner/MenuMainInner.vue'
import Collapse from '../../ui/collapse/Collapse.vue'
export default {
  components: { Logo, MenuMainInner, MenuAuthCard, Collapse },
  data() {
      return {
          
      }
  }
}
</script>
