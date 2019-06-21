<template>
    <div>
        <el-form :model='formData' :inline="true" label-width="150px" ref="form" label-position="left">
            <el-col :span="24/config.cols" v-for='(field,index) in config.fields' :key='index' >
                <component
                    v-if='field.show'
                    :key='index'
                    :is='field.fieldName'
                    :label='field.label'
                    :size='config.size'
                    :cong='field.cong'
                    :value='formData[field.name]'
                    :name='field.name'
                    @input='updateForm'
                ></component>
            </el-col>
            <el-col>
                <el-button type="primary" @click='submit'>提交</el-button>
                <el-button>重置</el-button>
            </el-col>
        </el-form>
    </div>
</template>
<script>
import textInput from './baseComponets/textInput'
import selectInput from './baseComponets/selectInput'
import radios from './baseComponets/radios'
import checks from './baseComponets/checks'
import numberInput from './baseComponets/numberInput'
export default {
    data(){
        return{
            formData:{
                name: "liu",
                age: "10", 
                sex: 1,
                marrige:0,
                like:[1,2]
            },
            config:{
                cols:3,
                size:'medium', //medium,small,mini
                fields:[
                    {
                        fieldName:'textInput',
                        label:'姓名',
                        name:'name',
                        id:1,
                        show:true,
                        cong:{
                            placeholder:'请输入姓名',
                            unit:'',
                        }
                        
                    },
                    {
                        fieldName:'textInput',
                        label:'年龄',
                        name:'age',
                        id:2,
                        show:true,
                        cong:{
                            placeholder:'请输入年龄',
                            unit:'岁',
                            type:'text',
                        }
                    },
                    {
                        fieldName:'selectInput',
                        label:'性别',
                        name:'sex',
                        id:3,
                        show:true,
                        cong:{
                            placeholder:'请选择',
                            unit:'',
                            options:[
                                {
                                    id:0,
                                    label:'男'
                                },
                                {
                                    id:1,
                                    label:'女'
                                }
                            ]
                        }
                    },
                    {
                        fieldName:'radios',
                        label:'是否结婚',
                        name:'marrige',
                        id:4,
                        show:true,
                        cong:{
                            placeholder:'',
                            unit:'',
                            options:[
                                {
                                    id:0,
                                    label:'是'
                                },
                                {
                                    id:1,
                                    label:'否'
                                }
                            ]
                        }
                    },
                    {
                        fieldName:'checks',
                        label:'爱好',
                        name:'like',
                        id:5,
                        show:true,
                        cong:{
                            placeholder:'',
                            unit:'',
                            isIndeterminate:true,
                            isAll:false,
                            options:[
                                {
                                    id:1,
                                    label:'看书'
                                },
                                {
                                    id:2,
                                    label:'运动'
                                },
                                {
                                    id:3,
                                    label:'唱歌'
                                }
                            ]
                        }
                    },
                    {
                        fieldName:'radios',
                        label:'是否最后一名',
                        name:'last',
                        id:6,
                        show:true,
                        cong:{
                            placeholder:'',
                            unit:'',
                            options:[
                                {
                                    id:0,
                                    label:'是'
                                },
                                {
                                    id:1,
                                    label:'否'
                                }
                            ]
                        }
                    },
                    {
                        fieldName:'textInput',
                        label:'其他',
                        name:'other',
                        id:7,
                        show:true,
                        cong:{
                            placeholder:'请输入年龄',
                            unit:'岁',
                            type:'text',
                        }
                    },
                    {
                        fieldName:'numberInput',
                        label:'体重',
                        name:'weight',
                        id:7,
                        show:true,
                        cong:{
                            placeholder:'请输入体重',
                            unit:'kg',
                            max:150,
                            min:0,
                            precision:2
                        }
                    },
                ]
            },
            pointerobj:{   //关联关系
                'like':[
                    {
                        id:6,
                        name:'last',
                        value:1
                    },
                    {
                        id:7,
                        name:'other',
                        value:1
                    }
                ]
            }
        }
    },
    components:{
        textInput,
        selectInput,
        radios,
        checks,
        numberInput
    },
    methods:{
        updateForm(name,val){
            this.formData[name]=val;
            // if(Array.isArray(val)){
            //     this.pointerobj[fieldName].map(item=>{
            //         this.config.fields.map(items=>{
            //             if(item.id==items.id){
            //                 if(val.some((now)=>{
            //                     return now==item.value
            //                 })){
            //                     items.show=true;
            //                 }else{
            //                     items.show=false;
            //                 }
            //             }
            //         })
            //     }) 
            // }else{
            //     this.pointerobj[fieldName].map(item=>{
            //         this.config.fields.map(items=>{
            //             if(item.id==items.id){
            //                 if(item.value==val){
            //                     items.show=true;
            //                 }else{
            //                     items.show=false;
            //                 }
            //             }
            //         })
            //     }) 
            // }
            this.senceShow(name,val)
            this.$forceUpdate()
        },
        judge(val,itemval){
            if(Array.isArray(val)){
                return val.some((ele)=>ele==itemval)
            }else{
                if(itemval==val){
                    return true
                }
                return false
            }
        },
        senceShow(name,val){
            if(this.pointerobj.hasOwnProperty(name) ){
                this.pointerobj[name].map(item=>{
                this.config.fields.map(items=>{
                    if(item.id==items.id){
                        let flag=this.judge(val,item.value);
                        items.show=flag;
                        if(items.show==false){
                            delete this.formData[item.name]
                        }
                        console.log(this.formData)
                    }
                })
            }) 
            }
            
            
        },
        submit(){
            console.log(this.formData)
        }
    },
    mounted(){
        for (const key in this.formData) {
            if (this.formData.hasOwnProperty(key)) {
                const element = this.formData[key];
                this.senceShow(key,element)
            }
        }
    },
}
</script>
