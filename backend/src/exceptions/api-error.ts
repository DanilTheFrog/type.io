export default class ApiError extends Error {
    public readonly status: number;
    public readonly errors: any[];

    constructor(status: number, message: string, errors: any[] = []) {
        super(message)
        this.status = status;
        this.errors = errors;
    }

    public static UnauthorizedError() {
        return new ApiError(401, "User is not authorized");
    }

    public static BadRequest(message: string, errors: any[]) {
        return new ApiError(400, message, errors)
    }
}