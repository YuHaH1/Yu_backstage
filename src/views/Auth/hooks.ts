import useUtils from "../../utils/utils";
import { ref } from "vue";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { loginApi } from "../../api/user";
interface IUserForm {
    userName: string,
    password: string,
    test?:any
}

export default function useLogin() {
    const utils = useUtils(),
        formData = ref<IUserForm>({
            userName: "",
            password: "",
            test: {
                name:'asd'
            }
        }),
        resetForm = ref(()=>{}),
        router = useRouter(),
        userNamerules = utils.Validate.validateEmail,
        userPassword = yup.string().required().min(8),
        loginHnadler = () => {
            loginApi({ userName: "Yu123123", password: "123456" }).then((res) => {
              utils.Storage.set({
                key: "token",
                value: res.data.token,
                expire: "1d",
              });
              router.push("/admin");
            });
        },
        onSubmit = async (values: any) => {
            
            loginHnadler()
            resetForm.value()
        },
        clearForm = (reset:any) => {
            resetForm.value = reset
        }
    return {
        formData,
        userNamerules,
        userPassword,
        loginHnadler,
        onSubmit,
        clearForm,
        resetForm
    }
}