import { pathsToModuleNameMapper } from 'ts-jest';

export default {

    clearMocks: true,

    collectCoverage: false, //! para hábilitar os relatórios de teste, por padrão e false

    collectCoverageFrom: ['<rootDir>/src/modules/**/services/*.ts'], //! Mostra onde estarão os arquivos de teste

    coverageDirectory: 'coverage', //! diretório onde e salvo os  relatórios de teste



    coverageProvider: 'v8',

    coverageReporters: [
        'text-summary', //? Somente no terminal
        'lcov', //? gera o HTML
    ], //! gera relatórios de teste os tipos de relatórios



    // moduleNameMapper: pathsToModuleNameMapper(
    //     {
    //         '@config/*': ['src/config/*'],
    //         '@modules/*': ['src/modules/*'],
    //         '@shared/*': ['src/shared/*'],
    //     },
    //     {
    //         prefix: '<rootDir>/',
    //     },
    // ), // ! Os redutores de código  do ts

    preset: 'ts-jest', //!precisa de instalar o ts-jest

    testMatch: ['**/*.spec.ts'], //! onde estão os arquivos de teste
};
