///  <reference path="./storage.ts" />/

import useStorage from './storage'
import useValidateRules from './validate'
import useValidateLanguage from './validateLanguage'
class Utils{
    public Storage
    public Validate 
    constructor() {
        this.Storage = useStorage()
        this.Validate = useValidateRules()
        useValidateLanguage()
    }
}

export default ()=>{
    return new Utils()
}