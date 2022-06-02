<template>
    <span v-if="audit" class="sts-auditing">
        審核中
    </span>
    <span v-else>
        <span v-if="status" class="sts-aud-succ">
            審核通過
        </span>
        <span v-else class="sts-aud-err">
            未通過
        </span>
    </span>
</template>

<script>
export default {
    props: [ 'audit', 'status' ]
}
</script>

<style>

</style>