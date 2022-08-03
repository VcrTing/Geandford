<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            taxs: ''
        }
    },
    methods: {
        down_from_ink(uri, named = '') {
            let _ik = document.createElement('a'); 
            _ik.style.display = 'none'
            _ik.href = uri
            _ik.setAttribute('download', named ? named : '')
            document.body.appendChild(_ik)
            _ik.click()
        },
        down_from_content() {

            const blob = new Blob([ `${this.taxs}` ], { type: "text/plain" })
            const a = document.createElement("a")
            a.href = URL.createObjectURL(blob)
            a.download = `FILE_${ moment(new Date()).format('yyyy_MM_DD') }`; a.click()
            URL.revokeObjectURL(a.href); a.remove()
        }
    }
}
</script>

<style>

</style>