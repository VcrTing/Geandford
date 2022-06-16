<template>
    <div>
        <span v-if="adt" class="sts-auditing">
            審核中
        </span>
        <span v-else>
            <span v-if="sts" class="sts-aud-succ">
                審核通過
            </span>
            <span v-else class="sts-aud-err">
                未通過
            </span>
        </span>
    </div>
</template>

<script>
export default {
    props: [ 'audit', 'status' ],
    computed: {
        adt() {
            // console.log('audit =', this.audit, !(this.audit.indexOf('awaiting')))
            return !(this.audit.indexOf('awaiting'))
        },
        sts() {
            // console.log('status =', this.status, ('approved'.indexOf(this.status)))
            return 'approved'.indexOf(this.status) >= 0
        }
    }
}
</script>

<style>

</style>