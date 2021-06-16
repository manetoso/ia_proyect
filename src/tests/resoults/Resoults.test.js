import react from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import Fuzzy from "./../../middlewares/";
import { FuzzyLogic } from "./../../middlewares/fuzzy-min";
import { obj } from "./data";

// CREACION DEL DOCMUENTO DE PRUEBAS
describe("Testing in <DepresionScreen />", () => {
  //SE INDICA EL CONTENIDO A TESTEAR
  const values = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "1",
    7: "2",
    8: "3",
    9: "4",
    10: "5",
  };

  const wrapper = shallow(<Fuzzy data={values} topic={"test"} />);

  const fuzzyresoult = new FuzzyLogic().getResult(obj);

  // TEST PARA COMPROBAR EL FORMATO DE SALIDA DEL RESULTADO, EN ESTE CASO EN PORCENTAJE
  test("result in percentage format", () => {
    // OBTENEMOS EL CONTENEDOR DEL RESULTADO
    const resoultContainer = wrapper.find("h3");

    // COMPROBAMOS QUE DENTRO DEL RESULTADO EXITA EL PORSENTAJE
    expect(resoultContainer.text().trim()).toMatch(/(%)/i);
  });

  // TEST PARA COMPROBAR LA VERACIDAD ENTRE EL VALOR ESPERADO Y EL OBTENIDO
  test("check resoult verasy", () => {
    //   OBTENEMOS EL CONTENEDOR DEL RESULTADO
    const resoultContainer = wrapper.find("h3");

    // OBTENEMOS EL RESULTADO ESPERADO
    const regex = new RegExp(fuzzyresoult);

    // COMPROBAMOS QUE EL RESULTADO ESPERADO CONCUERDE CON EL OBTENIDO
    expect(resoultContainer.text().trim()).toMatch(regex);
  });
});
