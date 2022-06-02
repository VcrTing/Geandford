<template>
    <div>
        <div class="fx-s">
            <p class="w-45">
                <b>培訓課程摘要當前時間：</b><span>{{ one.training_date }}</span>
            </p>
            <p class="w-65">
                <b>上崗安全與環境培訓出席者數量：</b><span>{{ one.member_num }}</span>
            </p>
        </div>
        <p>
            <b>當前期間主題談話清單：</b><span v-for="(v, i) in one.items" :key="i">
                {{ v.name }}，
            </span>
        </p>
        <p>
            <b>課程標題：</b><span>{{ one.title }}</span>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object,
            default() {
                return {
                    training_date: '2022-12-12 12:12',
                    member_num: 22,
                    items: [ { name: '高空作業' }, { name: '安全帽' } ],
                    title: '安全小知識'
                }
            }
        }
    }
}
</script>

<style>

</style>