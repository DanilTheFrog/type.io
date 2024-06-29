type UnpackedPromise<T> = T extends Promise<infer U> ? U : T
type GenericFunction<TS extends any[], R> = (...args: TS) => R
type Promisify<T> = {
    [K in keyof T]: T[K] extends GenericFunction<infer TS, infer R>
        ? (...args: TS) => Promise<UnpackedPromise<R>>
        : never
}

export {
    Promisify
}