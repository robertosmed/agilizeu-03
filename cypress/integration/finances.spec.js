/// <reference types = "cypress" />

import {format, prepareLocalStorage} from '../support/utils'

context('Dev Finance Agilizei', () => {
    //hooks
    //trechos que executam antes e depois do teste
    //before -->  antes de todos os testes
    //beforeEach --> antes de cada testes
    //after --> depois de todos testes
    //afterEach --> depois de cada testes
    
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app',{
            onBeforeLoad: (win) => {
                prepareLocalStorage(win)
            }
        })


    });

    it('Cadastrar entrada', () => {

        cy.get('#transaction .button').click() //id + class
        cy.get('#description').type('mesada') //id
        cy.get('[name="amount"]').type('12') //atributo
        cy.get('[type=date]').type('2021-03-17')//atributo
        cy.get('button').contains('Salvar').click() //tipo e valor

        //Validação
        cy.get('#data-table tbody tr').should('have.length', 3)
  
    })
    
    it('Cadastrar saida', () => {

        cy.get('#transaction .button').click() //id + class
        cy.get('#description').type('mesada') //id
        cy.get('[name="amount"]').type('-10') //atributo
        cy.get('[type=date]').type('2021-03-20')//atributo
        cy.get('button').contains('Salvar').click() //tipo e valor

        //Validação
        cy.get('#data-table tbody tr').should('have.length', 3)
    });

    it('Remover entrada e saida', () => {

        // estrategia 1: voltar para o elemento pai e avançar para um td img atributo
        //validação
        cy.get('td.description').contains('Mesada')
            .parent()
            .find('img[onclick*=remove]')
            .click()
        
        // estrategia 2: buscar todos oe irmaos do elmento e buscar o que tem img + atributo
        cy.get('td.description').contains('Suco Kapo')
            .siblings()
            .children('img[onclick*=remove]')
            .click() 

            //Validação
        cy.get('#data-table tbody tr').should('have.length', 0)
    });

    it('Validar saldo com diversas transações', () => {

        //capturar as linhas com as transações e as colunas com valores
        //capturar texto
        //formatar esses valores das linhas

        //somar valores de entrada e saidas

        //capturar tesxto do total
        //comparar somatorio de entredas e despesas com total

        let incomes = 0
        let expenses = 0

        cy.get('#data-table tbody tr')
            .each(($el, index, $list) => {

                cy.get($el).find('td.income, td.expense').invoke('text').then(text =>{
                    if(text.includes('-')){
                        expenses = expenses + format(text)
                    }else{
                        incomes = incomes + format(text)
                    }

                    cy.log(`entradas`, incomes)
                    cy.log(`saida`, expenses)
                        
                })
            })

        cy.get('#totalDisplay').invoke('text').then(text => {

            let formattedTotalDisplay = format(text)
            let expectedTotal = incomes + expenses

            //validação
            expect(formattedTotalDisplay).to.eq(expectedTotal)
        })
    });
});