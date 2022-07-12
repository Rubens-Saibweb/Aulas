import { MissingParamsError } from '../erros/missing-param-error';
import { SingUpController } from './signup'

describe('SingUp Controller', () => {
    test('shoud returt 400 if  no nome is provided', () => {

        const sut = new SingUpController();

        const httprequest = {
            body: {
                // name: 'any_name',
                emial: 'any@email.com',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            }
        }
        const httpResponse = sut.handle(httprequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamsError('name'))
    })

    test('shoud returt 400 if  no email is provided', () => {
        const sut = new SingUpController()

        const httpRequest = {
            body: {
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            }
        }
        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamsError('email'))
    })
})
