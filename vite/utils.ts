import _ from 'lodash'
export function parseEnv(env: Record<string, any>) {
    const envs = _.cloneDeep(env)
    Object.entries(env).forEach(([key, value]) => {
        if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value)
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