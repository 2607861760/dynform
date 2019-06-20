<template>
    <el-form-item :label='label' :name='name' v-if='show'>
        <el-checkbox :indeterminate="cong.isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <!-- <div style="margin: 15px 0;"></div> -->
        <el-checkbox-group v-model="checkedList" @change="handleCheckedChange">
            <el-checkbox v-for="option in cong.options" :label="option.id" :key="option.id">{{option.label}}</el-checkbox>
        </el-checkbox-group>
    </el-form-item>
</template>
<script>
import mixins from '../../mixins/formMixin.js';
export default {
    props:['label','cong','value','name','size','showUpdate'],
    mixins:[mixins],
    data(){
        return{
            checkAll: false,
            checkedList:[],
            show:false
        }
    },
    methods:{
      handleCheckAllChange(val) {
        let checkd=this.cong.options.map(item=>{return item.id})
        this.checkedList = val ? checkd : [];
        this.isIndeterminate = false;
      },
      handleCheckedChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cong.options.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cong.options.length;
      }
    },
    watch:{
        checkedList(val){
            this.onInput(val)
        },
        // showUpdate(val){
            // console.log(val)
        // }
        showUpdate:{
            handler(newValue, oldValue) {
                newValue.map(item=>{
                    if(item.name=this.name){
                        this.show=item.show
                    }
                })
　　　　},
　　　　deep: true
        }
    },
    created(){
        if(this.value){
            this.checkedList=this.value;
        }  
    }
}
</script>

