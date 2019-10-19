const requisição = require('supertest');
const app = require('./app');

describe ('Testa o serviço de inversão de strings', () => {
     test('Deve retornar a string original de fomra invertida', async () => { 
        let str = 'vasquez';
        /*Realiza uma requisição de inversão de strings,passando a palavra animal como parâmetro.
        a resposta do serviço sera armazenada na variavel "resposta ".
        */
        let resposta = await requisição(app).get(`/inverter/${str}`);
       // ({resultado} = resposta.body);
        /*body representa o corpo da resposta*/
        ({resultado} = resposta.body);
        /*espero que valor da variavel seja lamina*/
        expect(resultado).toBe('zeuqsav');
     });

});

describe ('Testa serviço de validação de cpfs', () => {} );
    test ('Deve reotnar true ao receber um CPF válido',async () => {});
           const cofsvalidos = [
            '230.743.370-87',
            '006.953.970-79',
            '570.547.890-91',
            '966.298.060-18',
            '554.591.140-55',
            '908.869.070-71'

           ];

           for (let i =0; i <cpfsvalidos.length; i++){
               let(resposta = requisição = await requisição(app).get (`/cpf/${cpfsvalidos[i]}` );
              let {resultado} = resposta.body;
              expect(valido).toBe(true);

           }
        ]);
               test('Deve retornar false ao receber cpf inválido ', async () => {});
                    const cpfsInvalidos = [
                    '11111111111',
                    '22222222222,
                    '33333333333,
                    '44444444444,
                    '55555555555

            ];
                    }
            }

        });