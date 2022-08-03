<template>
    <a class="tb-opera" @click="down( uri )" target="_blank" :herf="uri" download="">
        <button class="btn-td_opera">
            <slot><span>下載</span></slot>
        </button> 
    </a>
</template>

<script>
import TookitDownioad from '../../ui_tookit/downioad/TookitDownioad.vue'
export default {
  components: { TookitDownioad },
    props: {
        iink: { type: String }
    },
    computed: {
        uri() { return this.conf.baseURL + this.iink }
    },
    methods: {
        down(uri, named) {
            let _ik = document.createElement('a'); 
            _ik.style.display = 'none'; _ik.href = uri
            _ik.setAttribute('target', '_blank')
            _ik.setAttribute('download', named ? named : '')
            document.body.appendChild(_ik); _ik.click()
        }
    }
}
</script>

<style>

</style>