import { HttpResponse } from "../protocols/http"

export const badrequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})