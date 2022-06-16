<template>
    <div class="">
        <div class="fx-s">
            <p class="w-37">
                <b>工種：</b>{{ one.worker_type }}
            </p>
            <p class="w-31">
                <b>總工作時數（/hr）：</b>{{ one.work_hour }}
            </p>
            <p class="w-32"> 
                <b>人員數量：</b>{{ one.worker_number }}
            </p>
        </div>
        <div>
            <b>日期：</b><span>{{ one.date }}</span>
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