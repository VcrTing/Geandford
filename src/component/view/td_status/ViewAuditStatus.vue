<template>
    <span v-if="audit" class="sts-auditing">
        审核中
    </span>
    <span v-else>
        <span v-if="status" class="sts-aud-succ">
            审核通过
        </span>
        <span v-else class="sts-aud-err">
            未通过
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