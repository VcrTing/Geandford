<template>
  <layout-main>
    <menu-main slot="menu"></menu-main>
    <top-main slot="top"></top-main>
    <nav slot="cont">
      <router-view/>
    </nav>
  </layout-main>
</template>

<script>
import LayoutMain from '../../funcks/ui_layout/layout/LayoutMain.vue'
import MenuMain from '../../funcks/ui_layout/menu/MenuMain.vue'
import TopMain from '../../funcks/ui_layout/top/TopMain.vue'
export default {
  components: { MenuMain, LayoutMain, TopMain  },
    
}
</script>