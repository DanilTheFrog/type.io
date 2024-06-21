import { BaseRoute, RouteDecorator as route } from "../BaseRoute";


class Auth extends BaseRoute {
    constructor(baseURL: string, routePath: string) {
        super(baseURL, routePath);
    }

    @route.create("/register")
    async register(params: { name: string, email: string, password: string }) {
        
    }

}

export default Auth;