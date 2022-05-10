<template>
    <div class="d-ib">
        <span v-html="result"></span>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    props: [ '_time' ],
    computed: {
        result() {
            return moment(this._time).format('yyyy/MM/DD HH:mm:ss')
        }
    }
}
</script>