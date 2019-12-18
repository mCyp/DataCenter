<template>
    <el-card class="box" shadow="never">
        <el-form :model="person" ref="person" label-width="64px">
            <el-form-item>
                <div class="avatar-box">
                    <el-avatar :size="100" shape="square" class="avatar" fit="contain">User</el-avatar>
                    <el-button type="primary" plain round>更换头像</el-button>
                </div>
                <!-- <el-row>
                     <el-col :span="12">
                     </el-col>
                     <el-col :span="12">
                     </el-col>
                 </el-row>-->
            </el-form-item>
            <el-form-item label="姓名:">
                <el-input v-model="person.name" class="input" :disabled="nameEnable"></el-input>
                <el-button type="primary"
                           icon="el-icon-edit"
                           plain circle
                           class="edit"
                           v-if="nameEnable"
                           @click="nameEnable = false">
                </el-button>
                <el-button type="danger"
                           icon="el-icon-check"
                           plain circle
                           class="edit"
                           v-else
                           @click="nameEnable = true">
                </el-button>
            </el-form-item>
            <el-form-item label="生日:">
                <el-date-picker type="date" v-model="person.birthday" placeholder="选择日期" :disabled="birthdayEnable"></el-date-picker>
                <el-button type="primary"
                           icon="el-icon-edit"
                           plain circle
                           class="edit"
                           v-if="birthdayEnable"
                           @click="birthdayEnable = false">
                </el-button>
                <el-button type="danger"
                           icon="el-icon-check"
                           plain circle
                           class="edit"
                           v-else
                           @click="birthdayEnable = true">
                </el-button>
            </el-form-item>
            <el-form-item label="性别:">
                <el-radio-group v-model="person.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="person.password" type="password" class="input" :disabled="passwordEnable"></el-input>
                <el-button type="primary"
                           icon="el-icon-edit"
                           plain circle
                           class="edit"
                           v-if="passwordEnable"
                           @click="passwordEnable = false">
                </el-button>
                <el-button type="danger"
                           icon="el-icon-check"
                           plain circle
                           class="edit"
                           v-else
                           @click="passwordEnable = true">
                </el-button>
            </el-form-item>

        </el-form>
    </el-card>
</template>

<script>
    import header from '../../../assets/img/upload-success1.jpg'

    export default {
        name: "PersonInfo",
        data() {
            return {
                nameEnable:true,
                birthdayEnable:true,
                passwordEnable:true,
                person: {
                    imgUrl: header,
                    name: '',
                    birthday: '',
                    sex: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 400px;
        height: auto;
        margin: 40px auto;
        box-sizing: border-box;
    }
    .avatar-box {
        vertical-align: middle;
        line-height: 100px;
        height: 100px;
        box-sizing: border-box;

    }
    .avatar {
        vertical-align: middle;
        margin-right: 20px;
    }
    .input{
        width: auto;
        min-width: 220px;
    }
    .edit{
        margin-left: 20px;
    }
</style>