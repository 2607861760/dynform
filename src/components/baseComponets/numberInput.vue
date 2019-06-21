<template>
    <el-form-item :label="label" :name='name'>
        <el-input-number 
        v-model="nowval"
        controls-position="right"
        :min='cong.min'
        :max='cong.max'
        :precision='cong.precision'
        :step="0.01"
        :placeholder="cong.placeholder"
        :size='size'
        @input='onInput'
        >
        <template slot="suffix">{{cong.unit}}</template>
        </el-input-number>
    </el-form-item>
</template>
<script>
import mixins from '../../mixins/formMixin.js'
export default {
    props:['label','cong','value','name','size'],
    mixins:[mixins],
    data(){
        return{
            nowval:this.value
        }
    },
}
</script>

