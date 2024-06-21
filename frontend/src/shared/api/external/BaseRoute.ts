

type RouteResponse<T> = {
    success: boolean,
    data: T
    errors?: {
        [key: string]: string[]
    }
}




export class BaseRoute {
    
    protected baseURL: string;
    protected routePath: string;
    constructor(baseURL: string, routePath: string) {
        this.baseURL = baseURL;
        this.routePath = routePath;
    }

    decorate(wrapped: (...args: unknown[]) => Promise<unknown>): (...args: unknown[]) => Promise<unknown> {
        return function () {
            const result = wrapped();

            return result
        };
    }
}