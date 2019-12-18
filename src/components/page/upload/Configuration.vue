<template>
    <div>
        <el-row>
            <el-col :span="10" offset="2">
                <el-card class="card-box" shadow="never">
                    <h4>基础信息</h4>
                    <el-form :model="dataObj" label-width="100px" label-position="left">
                        <el-form-item label="数据名称：">
                            {{dataObj.name}}
                        </el-form-item>
                        <el-form-item label="目标库：">
                            <el-select v-model="dataObj.target" placeholder="请选择数据库">
                                <el-option v-for="(item,index) in dbArray" :key="index" :label="item"
                                           :value="item"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="主模型：">
                            <el-select v-model="dataObj.model" placeholder="请选择模型">
                                <el-option v-for="(item,index) in mainModel" :key="index" :label="item"
                                           :value="item"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="日期：">
                            <el-date-picker type="date" v-model="dataObj.date" placeholder="选择日期">
                                <el-option v-for="(item,index) in mainModel" :key="index" :label="item"
                                           :value="item"></el-option>
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="标签：">
                            <el-tag v-for="(item,index) in tags" :key="index" class="tag">
                                <i class="el-icon-collection-tag"></i>
                                {{item}}
                            </el-tag>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="card-box" shadow="never">
                    <h4>扩展信息</h4>
                    <el-form label-width="100px" label-position="left">
                        <el-form-item v-for="(item,index) in dataObj.extension" :label="item.params" :key="index">
                            <el-input v-model="item.value" clearable class="input"></el-input>
                            <span style="margin-left: 10px">{{item.unit}}</span>
                        </el-form-item>
                    </el-form>
                    <el-dialog title="扩展新增" :visible.sync="dialogFormVisible" width="30%">
                        <el-form :model="ext" label-width="80px" label-position="left">
                            <el-form-item label="参数名:">
                                <el-input v-model="ext.params"
                                          clearable
                                          class="input-dialog"></el-input>
                            </el-form-item>
                            <el-form-item label="值:" >
                                <el-input v-model="ext.value"
                                          clearable
                                          class="input-dialog"></el-input>
                            </el-form-item>
                            <el-form-item label="单位:" >
                                <el-input v-model="ext.unit"
                                          clearable
                                          class="input-dialog"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="createExt">确 定</el-button>
                        </div>
                    </el-dialog>
                    <el-button type="primary"
                               icon="el-icon-plus"
                               @click="dialogFormVisible = true" circle></el-button>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Configuration",
        data() {
            return {
                dialogFormVisible: false,
                dbArray: ['水动力性能数据库', '硬性数据库', '综合实验数据库'],
                mainModel: ['模型一', '模型二', '模型三'],
                tags: ['xxx', '模型', '阻力', '实验数据'],
                dataObj: {
                    name: 'XX模型阻力实验数据',
                    target: '目标库',
                    model: '',
                    date: '',
                    tags: '',
                    extension: [
                        {
                            params: '速度',
                            value: '',
                            unit: 'm/s'
                        },
                    ]
                },
                ext: {
                    params: '',
                    value: '',
                    unit: ''
                }
            }
        },
        methods:{
            createExt:function () {
                let e = {};
                e.params = this.ext.params;
                e.value = this.ext.value;
                e.unit = this.ext.unit;
                this.ext.value='';
                this.ext.params='';
                this.ext.unit='';
                this.dataObj.extension.push(e);
                this.dialogFormVisible = false;
            }
        }
    }
</script>

<style scoped>
    .card-box {
        width: 80%;
        height: 320px;
        margin: 40px auto 40px auto;
    }
    .tag {
        margin-left: 4px;
    }
    .input {
        min-width: 100px;
        width: auto;
    }
    .input-dialog{
        width: auto;
        min-width: 200px;
    }
    h4{
        margin: 10px 0;
        color: #1652C4;
    }
</style>