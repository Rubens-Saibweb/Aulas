import { MissingParamsError } from '../erros/missing-param-error';
import { EmailValidator } from '../protocols/email-validator';
import { SingUpController } from './signup'

interface SutTypes {
    sut: SingUpController
    emailValidatorStub: EmailValidator

}

const makeSut = (): SutTypes => {

    class EmailValidatorStub implements EmailValidator {
        isValid(email: string): boolean {
            return true
        }
    }

    const emailValidatorStub = new EmailValidatorStub()

    const sut = new SingUpController(emailValidatorStub);
    return {
        sut, emailValidatorStub
    }
}

describe('SingUp Controller', () => {
    test('shoud returt 400 if  no nome is provided', () => {

        const { sut } = makeSut()

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
        const { sut } = makeSut()

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


    test('shoud returt 400 if  no password is provided', () => {
        const { sut } = makeSut()

        const httpRequest = {
            body: {
                name: 'any_name',
                emial: 'any@email.com',
                passwordConfirmation: 'any_password',
            }
        }
        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        //  expect(httpResponse.body).toEqual(new MissingParamsError('password'))
    })

    test('shoud returt 400 if  no passwordConfirmation is provided', () => {
        const { sut } = makeSut()

        const httpRequest = {
            body: {
                name: 'any_name',
                emial: 'any@email.com',
                password: 'any_password',
            }
        }
        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        // expect(httpResponse.body).toEqual(new MissingParamsError('passwordConfirmation'))
    })

    test('shoud returt 400 if  an invalid Email is provided', () => {
        const { sut, emailValidatorStub } = makeSut()
        jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)

        const httpRequest = {
            body: {
                name: 'any_name',
                emial: 'invalid_any@email.com',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            }
        }
        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        //  expect(httpResponse.body).toEqual(new InvalidParamsError('email'))
    })





})
