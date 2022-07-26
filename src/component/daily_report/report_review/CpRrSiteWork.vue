<template>
    <div class="pb pt_s">
        <div class="fx-s pb_s">
            <b>{{ head }}</b>
            <button @click="plus" class="btn-pri_thin py_t px_x3"><span class="px h5">+</span></button>
        </div>
        <div class="bxs br pl_x2 pr_x py mt" v-for="(v, i) in items" :key="i">
            <div class="pr pb">
                {{ v.txt }}
            </div>
            <div class="fx-r err" @click="trash(i)">刪除</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'items',
        'head'
    ],
    methods: { plus() { },
        trash(pk) { 
            console.log('刪除PK =', pk)
        }
    }
}
</script>

<style>

</style>