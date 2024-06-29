type Config = {
    readonly accessSecret: string;
    readonly refreshSecret: string
}

const _config = {
    accessSecret: process.env["JWT_ACCESS_SECRET"],
    refreshSecret: process.env["JWT_REFRESH_SECRET"]
}


function check(): Config {
    let error = false;
    
    if(typeof _config.accessSecret !== 'string' || !_config.accessSecret) {
        console.error("Missing env variable 'JWT_ACCESS_SECRET'")
        error = true;
    }
    
    if(typeof _config.refreshSecret !== 'string' || !_config.refreshSecret) {
        console.error("Missing env variable 'JWT_REFRESH_SECRET'")
        error = true;
    }

    if(error) {
        process.exit(1);
    }

    return _config as Config
}

const config = check();

export default config