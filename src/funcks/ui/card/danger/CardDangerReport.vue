<template>
    <div class="card-work card-damage">
        <div class="fx-l pb_x pt_s">
            <div class="btn-pri_thin i-big fx-c">
                <icon-damage :_name="name"></icon-damage>
            </div>
            <h5 class="pl_x">
                <span v-if="name == 'accident'">傷害報告</span>
                <span v-if="name == 'damage'">第三方財產和公用設施損壞報告</span>
                <span v-if="name == 'hazardous_incident'">危險事件報告</span>
            </h5>
        </div>
        <hr/>
        <div class="fx-c px_x2 py_x2">
            <div class="t-c px upper" v-for="(v, i) in many" :key="i">
                <div class="h1">
                    {{ v.num }}
                </div>
                <div class="mh-3em sus">
                    {{ v.txt }}
                </div>
            </div>
        </div>
        <div class="t-r">
            <button @click="$emit('detail')" class="btn-pri_thin py_s px_x2 btn-k">详情</button>
        </div>
    </div>
</template>

<script>
import IconDamage from '../../../ui_static/icon/IconDamage.vue'
import CardConstructionWork from '../construction/CardConstructionWork.vue'
export default {
  components: { CardConstructionWork, IconDamage },
  props: [ 'name', 'many' ]

}                  
</script>                     

<style lang="sass">
.h1
    font-size: 4.5rem
    font-weight: 500
.i-big
    padding: 2px
    border-radius: 1em
    width: 4em
    height: 4em

.btn-k
    border-radius: 4em !important
</style>