import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import { localize } from '@vee-validate/i18n'
import { configure } from 'vee-validate'
const language = () => {
    configure({
        generateMessage:localize('zh_CN',zh_CN)
    })
}
export default function useValidateLanguage() {
    
    language()
    
}