export class SingUpController {
    handle(httprequest: any): any {

        if (!httprequest.body?.name) {
            return {
                statusCode: 400,
                body: new Error('Missing param error: name')
            }
        }
        if (!httprequest.body?.email) {
            return {
                statusCode: 400,
                body: new Error('Missing param error: email')
            }
        }
    }
}