import { MissingParamsError } from "../erros/missing-param-error"
import { badrequest } from "../helpers/http-helpers"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class SingUpController {
    handle(httprequest: HttpRequest): HttpResponse {

        // if (!httprequest.body?.name) {
        //     return badrequest(new MissingParamsError('name'))

        // }
        // if (!httprequest.body?.email) {
        //     return badrequest(new MissingParamsError('email'))
        // }

        const requiredFields = ["name", "email"]
        for (const field of requiredFields) {
            if (!httprequest.body[field]) {
                return badrequest(new MissingParamsError(field))
            }

        }


    }
}