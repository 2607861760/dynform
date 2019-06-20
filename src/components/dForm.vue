<template>
    <div>
        <el-form :model='formData' :inline="true" label-width="150px" ref="form" label-position="left">
            <el-col :span="24/config.cols" v-for='(field,index) in config.fields' :key='index' >
                <component
                    :key='index'
                    :is='field.fieldName'
                    :label='field.label'
                    :size='config.size'
                    :cong='field.cong'
                    :value='formData[field.name]'
                    :name='field.name'
                    @input='updateForm'
                    :showUpdate='pointerlits'
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
export default {
    data(){
        return{
            formData:{
                name: "liu",
                 age: "10", 
                 sex: 1,
                 marrige:0
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
                        cong:{
                            placeholder:'请输入姓名',
                            unit:'',
                            show:true,
                        }
                        
                    },
                    {
                        fieldName:'textInput',
                        label:'年龄',
                        name:'age',
                        id:2,
                        cong:{
                            placeholder:'请输入年龄',
                            unit:'岁',
                            type:'Number',
                            show:true,
                        }
                    },
                    {
                        fieldName:'selectInput',
                        label:'性别',
                        name:'sex',
                        id:3,
                        cong:{
                            placeholder:'请选择',
                            unit:'',
                            show:true,
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
                        pointer:[5],
                        cong:{
                            placeholder:'',
                            unit:'',
                            show:true,
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
                        cong:{
                            placeholder:'',
                            unit:'',
                            isIndeterminate:true,
                            show:false,
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
                    }
                ]
            },
            pointerlits:[]
        }
    },
    components:{
        textInput,
        selectInput,
        radios,
        checks
    },
    methods:{
        // marrieChange (field){
        //     console.log(field)
        // },
        updateForm(fieldName,val){
            this.formData[fieldName]=val;
            // console.log(this.pointerlits)
            this.pointerlits.map(item=>{
                if(item.name==fieldName){
                    item.show=!item.show
                }
            })
            // console.log(this.pointerlits)
            // this.$nextTick(()=>{
            //     this.pointerlits.map(item=>{
            //         if(fieldName==item){
            //             let pointer=[];
            //             this.config.fields.map(items=>{
            //                 if(items.name==item){
            //                     pointer=items.pointer
            //                 }
            //             })
            //             pointer.map(point=>{
            //                 this.config.fields.map(items=>{
            //                     console.log(point)
            //                     if(items.id==point){
            //                         if(items.cong['show']==true){
            //                             items.cong['show']=false
            //                         }else{
            //                             items.cong['show']=true
            //                         }
            //                     }
            //                 })
            //             })
                        
            //         }

            //     })
            //     console.log(this.config.fields)
            // })
            
        },
        submit(){
            console.log(this.formData)
        }
    },
    created(){
        // if(this.formData.marrige==0){
        //     this.config.fields.map(item=>{
        //         if(item.name=='like'){
        //             item.cong.show=true
        //         }
        //     })
        // }
        this.config.fields.map(item=>{
            if(item.pointer && item.pointer.length>0){
                let obj={
                    name:item.name,
                    show:false
                }
                this.pointerlits.push(obj)
            }
        })
    },
}
</script>
