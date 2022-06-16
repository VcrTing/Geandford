<template>
    <div v-if="!load" class="fx-s">
        <div class="w-40">
            <p>
                <b>承包商名稱：</b>
                <span>Dianna</span>
            </p>
            <div>
                <b>參考編號：</b>
                <span>
                    {{ one.uid }}
                </span>
            </div>
        </div>
        <div class="w-60">
            <p>
                <b>項目名稱：</b>
                <span>
                    {{ one.project.name }}
                </span>
            </p>
            <div>
                <b>月份：</b>
                <span>
                    {{ one.date }}
                </span>
            </div>
        </div>
    </div>
    <div v-else class="fx-s">
        <div class="w-40">
            <p><b>承包商名稱：</b>...</p>
            <div><b>參考編號：</b>...</div>
        </div>
        <div class="w-60">
            <p><b>項目名稱：</b>...</p>
            <div><b>月份：</b>...</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'one', 'load' ]
}
</script>

<style>

</style>