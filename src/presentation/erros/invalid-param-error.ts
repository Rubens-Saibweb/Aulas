export class InvalidParamsError extends Error {

    constructor(paramName: string) {
        super(`invalid Param: ${paramName} `)
        this.name = "InvalidParamsError"
    }

}