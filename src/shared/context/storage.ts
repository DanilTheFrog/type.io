
interface IStore {
    [key: string]: unknown
}
export class Store<K extends string, V> {
    
    private _storage: IStore = {};
    constructor() {
        
    }

    set(key: K, value: V) {
        this._storage[key] = value;
    }
    get(key: K) {
        return this._storage[key];
    }
}