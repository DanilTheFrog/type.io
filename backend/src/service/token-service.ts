import jwt from 'jsonwebtoken';
import config from "@base/config"
import prisma from '@base/prisma/client';


class TokenService {

    public generateTokens(payload: {[key: string]: any}) {
        const accessToken = jwt.sign(payload, config.accessSecret, {expiresIn: "10m"})
        const refreshToken = jwt.sign(payload, config.refreshSecret, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    public verifyAccessToken(token: string) {
        try {
            const userdata = jwt.verify(token, config.accessSecret)
            return userdata
        } catch (error: unknown) {
            console.log(error);
            return null
        }
    }

    public verifyRefreshToken(token: string) {
        try {
            const userdata = jwt.verify(token, config.refreshSecret)
            return userdata
        } catch (error: unknown) {
            console.log(error);
            return null
        }
    }

    public async findToken(token: string) {
        try {
            const _token = await prisma.token.findFirst({where:{refreshToken: token}})
            if (!_token) return null
            return _token;
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

export default new TokenService()