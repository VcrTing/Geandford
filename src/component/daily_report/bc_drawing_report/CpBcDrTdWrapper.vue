<template>
    <ui-td-item-wrapper>
        <div slot="tit">
            {{ tit }}<span v-if="index >= 0">_{{ index + 1 }}</span>
        </div>
        <div slot="sts">
            <button v-if="draw_status == 0" class="btn-err"><span>已逾期</span></button>
            <button v-if="draw_status == 1" class="btn-succ"><span>工程限期前14日之前</span></button>
            <button v-if="draw_status == 2" class="btn-wan"><span>工程限期前14日中</span></button>
        </div>
        <div slot="cont">
            <slot></slot>
        </div>
    </ui-td-item-wrapper>
</template>

<script>
import UiTdItemWrapper from '../../../funcks/ui_element/table/td/UiTdItemWrapper.vue'
export default {
  components: { UiTdItemWrapper },
    data() { return { ruie: 14 } },
    computed: {
        seed() {
            let res = this.one.status
            return res && res == 'approved' ? true : false
        },
        draw_status() {
            const ex_sub_d = this.one.expected_submission_date
            const ex_apr_d = this.one.expected_approval_date
            const ac_apr_d = this.one.actual_approval_date
            const sts = this.one.status

            const _L = this.one.drawing_forms.length

            if (_L >= 1 && (this.seed)) {
                return -1
            }
           
            // 逾期
            if (_L <= 0 && !ex_sub_d) { return 0 }
            else if (_L >= 1 && !ex_apr_d) { return 0 }
            else if (_L >= 1 && sts == 'rejected') { return 0 }

            // 计算 14 天数 相关
            if (_L >= 1) {
                if (ex_apr_d && !ac_apr_d) { 
                    return this.view.timed.subNow( ex_apr_d ) > 14 ? 2 : 1
                }
            } else {
                if (ex_sub_d) {
                    return this.view.timed.subNow( ex_sub_d ) > 14 ? 2 : 1
                }
            }
            return -1
        }
    },  
    props: {
        tit: { type: String },
        one: { type: Object },
        index: { type: Number }
    }
}
/*
数据
    const ex_sub_d = this.one.expected_submission_date
    const ex_apr_d = this.one.expected_approval_date
    const ac_apr_d = this.one.actual_approval_date
    const sts = this.one.status

    const _L = this.one.drawing_forms.length

    if (_L >= 1 && (this.seed)) {
        return -1
    } else {
        // 逾期
        if (_L <= 0 && !ex_sub_d) { return 0 }
        if (_L >= 1 && !ex_apr_d) { return 0 }
        if (_L >= 1 && sts == 'rejected') { return 0 }
    }

    // 计算 14 天数 相关
    if (_L >= 1) {
        if (ex_apr_d && !ac_apr_d) { 
            return this.view.timed.subNow( ex_apr_d ) > 14 ? 2 : 1
        }
    } else {
        if (ex_sub_d) {
            return this.view.timed.subNow( ex_sub_d ) > 14 ? 2 : 1
        }
    }

逾期：
    1.
        drawing form 长度 = 0，
        以及
        expected submission date = ''
        （需要有預計時間）
    2.
        drawing form 长度 >= 1，
        以及
        expected approval date = ''
        （需要有預計時間）
    3.
        drawing form 长度 >= 1，
        以及
        drawing form status = 'rejected'

14日：
    now - src <= 14 
    or 
    now - src > 14：
        1.
            drawing form 长度 = 0，
            以及
            expected submission date != ''
                (Toay - expected submission date)
        2.
            drawing form 长度 >= 1，
            以及
            expected approval date != ''
            以及
            actual approval date = ''
                (Toay - expected approval date)

无状态：
    drawing form 长度 >= 1，
    以及
    已提交，status = '批准'

*/

/*

Condition 1.1: 
Drawing list item 沒有 drawing form，沒有expected submission date
-> 顏色出紅色（需要有預計時間）

Condition 2.1: 
Drawing list item 有 drawing form，但drawing form 沒有expected approval date
-> 顏色出紅色（需要有預計時間）

Condition 3.1:
Drawing list item 有 drawing form
+ 最新drawing form 已提交，但已審批，但不獲批核，未有新的drawing form。
（drawing form status = “rejected”)
-> 顏色出紅色，字眼=rejected


Condition 1.2: 
Drawing list item 沒有 drawing form，有expected submission date
-> 顏色by日期（today 減 expected submission date)

Condition 2.2:
Drawing list item 有 drawing form
+ 最新drawing form 已提交，但未審批。
（有expected approval date, 沒有actual approval date)
-> 顏色 by日期（today 減 expected approval date)


Condition 3.2:
Drawing list item 有 drawing form
+ 最新drawing form 已提交，但已審批，但不獲批核，有新的drawing form。
-> 用新的drawing form 檢查。

Condition 3.3:
Drawing list item 有 drawing form
+ 最新drawing form 已提交，但已審批，獲批核。
-> 顏色出白色。
*/
</script>

<style>

</style>