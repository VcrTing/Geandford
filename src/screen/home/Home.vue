<template>
  <layout-main>
    <menu-main slot="menu"></menu-main>
    <top-main slot="top"></top-main>
    <nav slot="cont">
      <router-view/>

      <tookit-html-fresh>
        <tookit-home-source></tookit-home-source>
      </tookit-html-fresh>
    </nav>
  </layout-main>
</template>

<script>
import LayoutMain from '../../funcks/ui_layout/layout/LayoutMain.vue'
import MenuMain from '../../funcks/ui_layout/menu/MenuMain.vue'
import TopMain from '../../funcks/ui_layout/top/TopMain.vue'
import TookitHtmlFresh from '../../funcks/ui_tookit/fresh/TookitHtmlFresh.vue'
import TookitHomeSource from '../../funcks/ui_tookit/homework/TookitHomeSource.vue'
export default {
  components: { MenuMain, LayoutMain, TopMain, TookitHtmlFresh, TookitHomeSource },

}
</script>