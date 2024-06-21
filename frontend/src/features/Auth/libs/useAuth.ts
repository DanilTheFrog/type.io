
type Secutity = {
    email: string;
    password: string
}

type User = {
    name: string;
}


export const useAuth = () => {


    const login = (dto: Secutity) => {
        console.log(dto);
    }

    const register = (dto: (Secutity & User)) => {
        console.log(dto);
    }

    const logout = () => {
        console.log('logout');
    }

    return {login, register, logout);
    }
}