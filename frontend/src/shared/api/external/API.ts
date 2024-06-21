import Auth from './Auth'

class API {
    public auth: Auth
    constructor(private baseURL: string) {

        this.auth = new Auth(this.baseURL, '/auth')
        
    }

}

export default API
