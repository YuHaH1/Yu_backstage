import _ from 'lodash'
export function parseEnv(): envTypes {
    const envs: any = _.cloneDeep(import.meta.env)
    Object.entries(envs).forEach(([key, value ]) => {

        if (/^\d+$/.test(value as string)) {
            envs[key] = parseInt(value as string)
        }
        if (value === 'true' || value === 'false') {
            envs[key] = value === 'true' ? true : false
        }
    })
    return envs
}
/**
 * Record 相当于type Record<T extends keyof any,B>{
 *  [P in T]:B
 * }
 */