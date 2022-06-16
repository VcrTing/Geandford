<template>
    <div>
        <div class="fx-s">
            <p class="w-45">
                <b>培訓課程摘要當前時間：</b><span>{{ one.edit_date }} {{ one.time }}</span>
            </p>
            <p class="w-65">
                <b>上崗安全與環境培訓出席者數量：</b><span>{{ one.attendance }}</span>
            </p>
        </div>
        <p>
            <b>當前期間主題談話清單：</b><span v-for="(v, i) in one.current_topic" :key="i">
                {{ v.topic }}，
            </span>
        </p>
        <div>
            <b>課程標題：</b><span>{{ one.course_title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object,
            default() {
                return {
                    
                }
            }
        }
    }
}
</script>

<style>

</style>