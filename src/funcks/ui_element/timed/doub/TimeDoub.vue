<template>
    <nav class="fx-l input-timed timed-doub">
        <div>
            <timed-picker
                :timed="start"
                :pahd="'开始时间'"
            ></timed-picker>
        </div>
        <div class="px">
            <i class="mdi mdi-arrow-bottom-right h4 pg_rt sus"></i>
        </div>
        <div>
            <timed-picker
                :timed="start"
                :pahd="'结束时间'"
            ></timed-picker>
        </div>
        <div class="fx-1 fx-r pr_x2">
            <icon-input></icon-input>
        </div>
    </nav>
</template>
<script>
import moment from 'moment'
import TimedPicker from '../plugin/TimedPicker.vue'
import IconInput from '../../../ui_static/icon/IconInput.vue'
export default {
  components: { TimedPicker, IconInput },
    data() {
        return {
            end: '',
            start: ''
        }
    },
    mounted() { 
        this.start = moment(new Date()).format('yyyy-MM-DD') }
}
</script>
<style lang="sass">
.pg_rt::before
    transform: rotate(-45deg) !important
</style>