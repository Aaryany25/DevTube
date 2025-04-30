class ApiError extends Error{
    constructor(
        statusCode,
        message="something Went Wrong",
        errors = [],
        statck = ""
    ){
        super(message),
        this.errors = errors,
        this.data = null ,
        this.message = message,
        this.statusCode = statusCode
        this.success = false 
    }
}

export {ApiError}