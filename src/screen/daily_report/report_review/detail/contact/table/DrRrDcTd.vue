<template>
    <div class="td pl-ip_icon">
        <div class="w-26">
            {{ one.name }}
        </div>
        <div class="w-33">
            {{ one.email }}
        </div>
        <div class="w-24">
            {{ one.phone ? one.phone : '(未記錄)' }}
        </div>
        <div class="w-17">
            <!--{{ one.sent_eamil ? '已驗證': '未驗證' }}-->
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'one' ]
}
</script>

<style>

</style>