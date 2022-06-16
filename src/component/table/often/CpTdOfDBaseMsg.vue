<template>
    <div>
        <div class="fx-s">
            <p class="w-37"><b>表格名称：</b><span>{{ one.name }}</span></p>
            <p class="w-31"><b>项目名称：</b><span>{{ one.project.name }}</span></p>
            <p class="w-32"></p>
        </div>
        <p><b>编号：</b><span>{{ one.uid }}</span></p>
        <div class="fx-s">
            <div class="w-37"><b>创建于：</b><span>{{ view.ser_timed(one.created_at) }}</span></div>
            <div class="w-31"><b>上次修改于于：</b><span>{{ view.ser_timed(one.updated_at) }}</span></div>
            <div class="w-32"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'ioad', 'one' ]
}
</script>

<style>

</style>