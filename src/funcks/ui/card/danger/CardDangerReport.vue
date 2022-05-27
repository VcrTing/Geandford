<template>
    <div class="card-work">
        <div class="fx-l pb_x pt_s">
            <div class="btn-pri_thin i-big fx-c">
                图
            </div>
            <h5 class="pl_x">{{ head }}</h5>
        </div>
        <hr/>
        <div class="fx-c px_x2 py_x2">
            <div class="t-c px" v-for="(v, i) in many" :key="i">
                <div class="h1">
                    {{ v.num }}
                </div>
                <span class="sus">
                    {{ v.txt }}
                </span>
            </div>
        </div>
        <div class="t-r">
            <button @click="$emit('detail')" class="btn-pri_thin py_s px_x2 btn-k">详情</button>
        </div>
    </div>
</template>

<script>
import CardConstructionWork from '../construction/CardConstructionWork.vue'
export default {
  components: { CardConstructionWork },
  props: [ 'head', 'icon', 'many' ]

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