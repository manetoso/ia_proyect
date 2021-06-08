import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"

import { AnxietyScreen } from '../../screens/AnxietyScreen';

//LINK DE LA DOCUMENTACIÓN EN ENZYME CON SHALLOW https://enzymejs.github.io/enzyme/docs/api/shallow.html

//SE CREA EL DOCUMENTO DE PRUEBAS
describe('Testing in <AnxietyScreen />', () => {
    
    //VARIABLES QUE LLENAN LOS CAMPOS NECESARIOS PARA REALIZAR PRUEBAS EN EL COMPONENTE
    

    //INTICA QUE EL WRAPPER ES EL CONTENIDO HTML DEL COMPONENTE
    const wrapper = shallow( <AnxietyScreen /> )

    //TODOS LOS TESTS SON PRUEBAS UNITARIAS DENTRO DE ESTE DOCUMENTO DE PRUEBAS

    //TEST QUE BUSCA QUE SE MUESTRE CORRECTAMENTE EL CONTENIDO HTML DEL COMPONENTE
    test('should show the screen correctly', () => {
        //ESCRIBE UN NUEVO SNAPTSHOT EN LA CARPETA DE _snapshots_
        //DENTRO DEL DIRECTORIO DE PRUEBAS DEL COMPONENTE AL EJECUTARCE POR PRIMERA VEZ

        //SI EXISTE UNA SNAPTSHOT LA USA PARA COMPARAR EL WRAPPER CON ESTA
        //SI SON IGUALES TODO ESTÁ BIEN, SI NO SE PARECEN EN ALGO LA PRUEBA FALLA
        expect( wrapper ).toMatchSnapshot()
    })

    //TEST QUE BUSCA QUE SE MUESTREN UN TOTAL DE 10 PREGUNTAS EN LA PÁGINA
    test('should show a total of 10 questions', () => {
        const questionsLength = wrapper.find( 'QuestionnaireAnx' )

        expect( questionsLength ).toHaveLength( 10 )
    })

    //TEST QUE BUSCA QUE SE MUESTRE UN BOTÓN PARA CANCELAR
    test('should show a button to cancel', () => {
        const cancelButton = wrapper.find( '#btn-cancel' )

        expect( cancelButton ).toHaveLength( 1 )
    })

    //TEST QUE BUSCA QUE SE MUESTRE UN BOTÓN PARA TERMINAR EL TEST
    test('should show a button to finish the form', () => {
        const sendButton = wrapper.find( '#btn-send' )

        expect( sendButton ).toHaveLength( 1 )
    })

})
