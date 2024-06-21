
type ApiResponse<T> = {
    success: boolean,
    data: T,
    errors?: string[],
}

type CreateUser = null;

type CreateUserArgs = {
    name: string,
    email: string,
    password: string
}

type ReadUserArgs = {
    email: string,
    password: string
}

type ReadUser = {
    id: number,
    token: string
}

class Auth {
    private url: string
    constructor(private baseURL: string, private routePath: string) {
        this.url = this.baseURL+this.routePath
    }

    async login({email, password}: ReadUserArgs): Promise<ApiResponse<ReadUser>> {
        console.log({email, password});
        try {
            const response = await fetch(`${this.url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            return data as ApiResponse<ReadUser>;
        } catch (error: unknown) {
            throw new Error("Ошибка какая то");
        }
    }

    async register({name, email, password}: CreateUserArgs): Promise<ApiResponse<CreateUser>> {
        
        try {
            const response = await fetch(`${this.url}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, password})
            })

            const data = await response.json();
            return data as ApiResponse<CreateUser>;
        } catch (error) {
            throw new Error("Ошибка какая то");
        }
    }

}

export default Auth;