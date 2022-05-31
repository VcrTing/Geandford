<template>
    <div class="input-timed input-icon-r">
        <timed-picker :timed="def" @result="submit" :class="_calss"></timed-picker>
        <icon-input></icon-input>
    </div>
</template>

<script>
import TimedPicker from '../plugin/TimedPicker.vue'
import IconInput from '../../../ui_static/icon/IconInput.vue'
export default {
  components: { TimedPicker, IconInput },
    props: [ 'def', '_calss' ],
    mounted() { },
    methods: {
        submit(v) { this.$emit('result', v) }
    }
}
</script>

<style>

</style>