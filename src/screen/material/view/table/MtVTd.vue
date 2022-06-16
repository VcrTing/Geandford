<template>
    <div class="pl_x3 exp-td">

        <div class="td">
            <div class="w-20">{{ one.order_id }}</div>
            <div class="w-20">{{ one.person_in_charge }}</div>
            <div class="w-16">{{ one.expected_arrival_date }}</div>
            <div class="w-17">{{ one.actual_arrival_date }}</div>
            <div class="w-17">{{ one.arrived_number }}</div>
            <div class="w-10">{{ one.status }}</div>
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