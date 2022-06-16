<template>
    <div v-if="!_ioad">
        <div class="fx-s">
            <p class="w-37">
                <b>工程性質：</b><span>{{ one.contract_sub_type.name }}</span>
            </p>
            <p class="w-31">
                <b>承建商名稱：</b><span>{{ one.contractor_name }}</span>
            </p>
            <p class="w-37">
                <b>承建商負責人：</b><span>{{ one.contractor_contact.name }}</span>
            </p>
        </div>
        <div>
            <b>承建商聯絡電話：</b><span>{{ one.contractor_contact.phone }}</span>
        </div>
    </div>
    <div v-else>
        <div class="fx-s">
            <p class="w-37"><b>工程性質：</b><span>...</span></p>
            <p class="w-31"><b>承建商名稱：</b><span>...</span></p>
            <p class="w-37"><b>承建商負責人：</b><span>...</span></p>
        </div>
        <div><b>承建商聯絡電話：</b><span>...</span></div>
    </div>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading },
    props: [ 'one', '_ioad' ]
}
</script>

<style>

</style>