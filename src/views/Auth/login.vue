<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-form">
       
          <h1 class="text-center text-gray-700 text-lg">会员登录</h1>
          <YuValidate @onSubmit="onSubmit">
            <YuValidateItem
              name="formData.userName"
              :rules="userNamerules"
              v-slot="{ field, errorMessage }"
              v-model="formData.userName"
            >
              <YuInput
                v-bind="field"
                placeholder="请输入手机号或邮箱"
                type="text"
              />
            </YuValidateItem>
            <YuValidateItem
              name="formData.password"
              v-model="formData.password"
              :rules="userPassword"
              v-slot="{ field, errorMessage }"
            >
              <YuInput
                v-bind="field"
                placeholder="请输入密码"
                type="password"
              />
            </YuValidateItem>

            <template #buttonGroup="{ resetForm }">
              <YuButton
                type="submit"
                content="登录"
                @click="clearForm(resetForm)"
              />
            </template>
          </YuValidate>
          <ul class="login-options">
            <li>网站首页</li>
            <li>会员注册</li>
            <li>找回密码</li>
          </ul>
     
      </div>
   
     
      <div class="login-logo">
        <img src="../../../public/images/login-logo.jpg" alt="" />
      </div>
    </div>
  </div>
</template>


<script setup lang='ts'>
import { onMounted, ref } from "vue";
import useLogin from "./hooks";
const {
  formData,
  userNamerules,
  userPassword,
  loginHnadler,
  onSubmit,
  clearForm,
} = useLogin();


</script>


<style lang="scss" scope>
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
.container {
  @apply flex justify-center h-full w-full items-center bg-slate-300;
  .login-wrapper {
    @apply bg-white shadow-md rounded-md w-[720px]   md:grid grid-cols-2  overflow-hidden;
    .login-form {
      @apply flex flex-col items-center justify-items-center p-5 h-fit ;
      .login-options {
        @apply grid grid-flow-col;
        li {
          margin: 10px;
          font-size: 12px;
        }
      }
    }
    .login-logo {
      @apply hidden md:block;
      img {
        @apply object-cover h-80 w-full;
      }
    }
  }
}
</style>
