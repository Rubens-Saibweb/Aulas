import { MissingParamsError } from "../erros/missing-param-error"
import { badrequest } from "../helpers/http-helpers"
import { Controller } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class SingUpController implements Controller {
    handle(httprequest: HttpRequest): HttpResponse {

        const requiredFields = ["name", "email",
            "password", "passwordConfirmation"]

        for (const field of requiredFields) {
            if (!httprequest.body[field]) {
                return badrequest(new MissingParamsError(field))
            }

        }
    }
}