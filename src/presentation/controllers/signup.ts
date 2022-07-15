import { InvalidParamsError } from "../erros/invalid-param-error"
import { MissingParamsError } from "../erros/missing-param-error"
import { badrequest } from "../helpers/http-helpers"
import { Controller } from "../protocols/controller"
import { EmailValidator } from "../protocols/email-validator"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class SingUpController implements Controller {

    private readonly emailValidator: EmailValidator
    constructor(emailValidator: EmailValidator) {
        this.emailValidator = emailValidator
    }

    handle(httprequest: HttpRequest): HttpResponse {

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

    }
}