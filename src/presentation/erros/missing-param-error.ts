export class MissingParamsError extends Error {

    constructor(paramName: string) {
        super(`Missing Param: ${paramName} `)
        this.name = "MissingParamsError"
    }

}