
/**
 * 验证邮箱
 * @param value string
 * @returns boolean
 */
 const validateEmail = (value: string) => {
    // if the field is empty
    if (!value) {
        return '必填项不能为空';
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return '格式不正确';
    }
    // All is good
    return true;
}

export default()=>{
    return {
        validateEmail
    }
}