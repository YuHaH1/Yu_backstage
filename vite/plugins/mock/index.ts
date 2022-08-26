import { viteMockServe } from 'vite-plugin-mock'
export default function registerMockjs(isBuild: boolean) {
    return viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: !isBuild,
    })
}