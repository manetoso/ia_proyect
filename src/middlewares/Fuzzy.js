import React from "react";

import { FuzzyLogic } from "./fuzzy-min";

function Fuzzy({ data, topic }) {
  let obj = {
    crisp_input: [
      data["1"],
      data["2"],
      data["3"],
      data["4"],
      data["5"],
      data["6"],
      data["7"],
      data["8"],
      data["9"],
      data["10"],
    ],
    variables_input: [
			{
				name: "question1",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question2",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question3",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question4",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question15",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question6",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question7",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question8",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question9",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			},
			{
				name: "question10",
				setsName: ["Nunca", "En alguna ocacion", "A menudo", "Casi todos los días", "Siempre"],
				sets: [
					[0,0,0.4,1.6],
					[1,1.4,2,2.8],
					[2.2,2.6,3.6,4],
					[3.4,3.8,4.4,4.6],
					[4.2,5,5,5]
				]
			}
		],
		variable_output: {
			name: "Posibilidad",
			setsName: ["Leve", "Moderado", "Moderado-Grave", "Grave", "Extremo"],
			sets: [
				[0,0,5,10],
				[7,15,30,43],
				[35,40,54,60],
				[53,65,70,85],
				[78,90,100,100]
			]
		},
		inferences: [
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4],
			[0,1,2,3,4]
		],
  };
  var fl = new FuzzyLogic();
  return (
    <>
      <h3 style={{ display: 'flex', justifyContent: 'center' }} >El procentaje de sufrir de {topic} que tiene usted es de: {fl.getResult(obj)}%</h3>
      {console.log( data )}
    </>
  );
}

export default Fuzzy;
