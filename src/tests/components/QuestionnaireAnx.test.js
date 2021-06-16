import React from "react";
import { mount, shallow } from "enzyme";

import QuestionnaireAnx from "../../components/questionaire_anx/QuestionnaireAnx";
import { act, fireEvent } from "@testing-library/react";

//LINK DE LA DOCUMENTACIÓN EN ENZYME CON SHALLOW https://enzymejs.github.io/enzyme/docs/api/shallow.html

//SE CREA EL DOCUMENTO DE PRUEBAS
describe("Testing in <QuestionnaireAnx />", () => {
  //VARIABLES QUE LLENAN LOS CAMPOS NECESARIOS PARA REALIZAR PRUEBAS EN EL COMPONENTE
  const number = 1;
  const question = "¿Está usted bien?";

  //INTICA QUE EL WRAPPER ES EL CONTENIDO HTML DEL COMPONENTE
  const wrapper = shallow(
    <QuestionnaireAnx action={() => {}} number={number} question={question} />
  );

  //TODOS LOS TESTS SON PRUEBAS UNITARIAS DENTRO DE ESTE DOCUMENTO DE PRUEBAS

  //TEST QUE BUSCA QUE SE MUESTRE CORRECTAMENTE EL CONTENIDO HTML DEL COMPONENTE
  test("should show the component correctly", () => {
    //ESCRIBE UN NUEVO SNAPTSHOT EN LA CARPETA DE _snapshots_
    //DENTRO DEL DIRECTORIO DE PRUEBAS DEL COMPONENTE AL EJECUTARCE POR PRIMERA VEZ

    //SI EXISTE UNA SNAPTSHOT LA USA PARA COMPARAR EL WRAPPER CON ESTA
    //SI SON IGUALES TODO ESTÁ BIEN, SI NO SE PARECEN EN ALGO LA PRUEBA FALLA
    expect(wrapper).toMatchSnapshot();
  });

  //TEST QUE BUSCA QUE EL NÚMERO DE PREGUNTA ESTÉ DENTRO DE UN <div/>
  //CON EL CLASSNAME DE "card-header"
  test('should show the question number on a div with the className "card-header"', () => {
    const questionNumberTest = wrapper.find("div.card-header");
    const textNumber = "Pregunta " + number;

    expect(questionNumberTest.hasClass("card-header")).toBe(true);
    expect(questionNumberTest.text().trim()).toBe(textNumber);
  });

  //TEST QUE BUSCA QUE LA PREGUNTA ESTÉ DENTRO DE UN <p/>
  //CON EL CLASSNAME "card-text"
  test('should show the question on a paragraph with the className "card-text"', () => {
    const questionTest = wrapper.find("p.card-text");

    expect(questionTest.hasClass("card-text")).toBe(true);
    expect(questionTest.text().trim()).toBe(question);
  });

  //TEST QUE BUSCA QUE SE MUESTREN 5 POSIBLES RESPUESTAS A ESCOGER
  test("should give 5 answers to choose", () => {
    const answersLength = wrapper.find("div.form-group").children();

    expect(answersLength).toHaveLength(5);
  });

  test("check if the user can change their anwers before submit tests", () => {
    //
  });
});
