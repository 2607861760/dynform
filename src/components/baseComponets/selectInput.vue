<template>
    <!-- <div> -->
        <el-form-item :label='label' :name='name' v-if='cong.show'>
            <el-select v-model="nowval" @input="onInput">
                <el-option v-for='option in cong.options' 
                :key='option.id' 
                :value="option.id"
                :label="option.label"
                ></el-option>
            </el-select>
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

