type TDate = 'h' | 'w' | 'd' | 'm' | 's'
type TExpire = `${number}${TDate}`;
export interface IStorage {
    value: any,
    key: string,
    expire?: TExpire
}
const storageUtil = {
    set(data: IStorage) {
        if (data.expire) {
            const date = {expire:0}
            data?.expire && this.processExpire(data.expire,date)
            localStorage.setItem(data.key, JSON.stringify({ expire: date.expire, value: data.value }))
        } else {
            localStorage.setItem(data.key, JSON.stringify(data.value))
        }

    },
    get(key: string):IStorage|null {
        let res = localStorage.getItem(key) as any
        res && (res = JSON.parse(res))
        
        if (res?.expire && res.expire < new Date().getTime()) {
            localStorage.removeItem(key)
            res = null
        }
        return res
    },
    delete(key: string) {
        localStorage.removeItem(key)
    },
    processExpire(expire: TExpire, date: { expire: number }) {
        const time = expire.match(/\d/)![0],
            timerUnit: TDate = expire.split(time)[1].toLocaleLowerCase() as TDate
        switch (timerUnit) {
            case 's':
                date.expire = Number(time) * 1000
                break
            case 'm':
                date.expire = Number(time) * 1000 * 60
                break
            case 'h':
                date.expire = Number(time) * 1000 * 60 * 60
                break
            case 'd':
                date.expire = Number(time) * 1000 * 60 * 60 * 24
                break
            case 'w':
                date.expire = Number(time) * 1000 * 60 * 60 * 24 * 7
                break

        }
        date.expire += new Date().getTime()
    }
}
export default () => {
    return storageUtil
}