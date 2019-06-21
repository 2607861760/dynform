<template>
    <!-- <div> -->
        <el-form-item :label='label' :name='name'>
             <el-radio-group v-model="nowval" @input="onInput">
                <el-radio v-for='option in cong.options' 
                :key="option.id"
                :label="option.id">
                {{option.label}}
                </el-radio>
            </el-radio-group>
        </el-form-item>
    <!-- </div> -->
</template>
<script>
import mixins from '../../mixins/formMixin.js';
export default {
    props:['label','cong','value','name','size'],
    mixins:[mixins],
    data(){
        return{
            nowval:this.value
        }
    }
}
</script>

