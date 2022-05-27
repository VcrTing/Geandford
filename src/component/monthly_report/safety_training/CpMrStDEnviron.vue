<template>
    <div>
        <div class="fx-s">
            <p class="w-45">
                培训课程摘要当前时间：<span>{{ one.training_date }}</span>
            </p>
            <p class="w-65">
                上岗安全与环境培训出席者数量：<span>{{ one.member_num }}</span>
            </p>
        </div>
        <p>
            当前期间主题谈话清单：<span v-for="(v, i) in one.items" :key="i">
                {{ v.name }}，
            </span>
        </p>
        <p>
            课程标题：<span>{{ one.title }}</span>
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
                    items: [ { name: '高空作业' }, { name: '安全帽' } ],
                    title: '安全小知识'
                }
            }
        }
    }
}
</script>

<style>

</style>