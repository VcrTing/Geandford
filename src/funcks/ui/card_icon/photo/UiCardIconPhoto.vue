<template>
    <div>
        <div class="fx-l">
            <div class="cd-icon">
                <icon-job-function :_name="name"></icon-job-function>
            </div>
            <h6 class="fx-1 pl_x2">
                {{ name }}
            </h6>
        </div>
    </div>
</template>

<script>
import IconJobFunction from "../../../ui_static/icon/IconJobFunction.vue"

export default {
    components: { IconJobFunction },
    props: {
        name: {
            type: String
        },
        vai: {
            type: Boolean
        }
    }
}
</script>

<style lang="sass" scoped>
.cd-icon
    width: 2.5em
    height: 2.5em
    background: #f8f8f8
    i
        font-size: 2.2em
</style>