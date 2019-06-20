<template>
    <!-- <div> -->
        <el-form-item :label='label' :name='name' v-if='cong.show'>
            <el-input 
                :type="cong.type || 'text'"
                v-model="nowval" 
                :placeholder="cong.placeholder" 
                :size='size'
                @input='onInput'
                >
                <template slot="suffix">{{cong.unit}}</template>
                </el-input>
        </el-form-item>
    <!-- </div> -->
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
    methods:{
    }
}
</script>

