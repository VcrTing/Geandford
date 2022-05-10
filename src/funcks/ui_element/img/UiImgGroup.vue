<template>
    <div class="row fx-s">
        <nav class="w-25" v-for="(v, i) in imgs" :key="i">
            <img class="img" :src="v.src"/>
        </nav>
    </div>
</template>
<script>
export default {
    props: [
        'imgs'
    ]
}
</script>