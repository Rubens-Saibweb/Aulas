
import { InvalidParamsError, MissingParamsError } from "../erros"
import { badrequest, serverError } from "../helpers/http-helpers"
import { Controller } from "../protocols/controller"
import { EmailValidator, HttpRequest, HttpResponse } from "../protocols"


export class SingUpController implements Controller {

    private readonly emailValidator: EmailValidator
    constructor(emailValidator: EmailValidator) {
        this.emailValidator = emailValidator
    }

    handle(httprequest: HttpRequest): HttpResponse {

        try {
            const requiredFields = ["name", "email",
                "password", "passwordConfirmation"]

            for (const field of requiredFields) {
                if (!httprequest.body[field]) {
                    return badrequest(new MissingParamsError(field))
                }

            }
            const isValid = this.emailValidator.isValid(httprequest.body.email)

            if (!isValid) {
                return badrequest(new InvalidParamsError("email"))
            }
        } catch (error) {
            return serverError()
        }
    }
}