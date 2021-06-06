import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function Fuzzy(props) {
    return (
        <div>
            <Helmet>
                <script src="./fuzzy-min.js"></script>
                <script>
                var obj = {
		crisp_input: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		variables_input: [
			{
				name: "En qué medida tienes sensaciones de angustia o aprensión",
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
				name: "Alteraciones en el sueño; tardas en quedarte dormido, te despiertas varias veces o despiertas antes de lo previsto",
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
				name: "Aumento de la frecuencia cardiaca (palpitaciones) sin enfermedad conocida que la justifique",
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
				name: "Dificultad para concentrarte",
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
				name: "Anticipación de acontecimientos negativos",
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
				name: "Pensamientos o imágenes desagradables",
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
				name: "Dificultad para tomar decisiones",
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
				name: "Fumas, comes o bebes para calmar tu ansiedad",
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
				name: "Evitas o escapas de determinadas situaciones",
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
				name: "Haces movimientos repetitivos (tocarte el pelo, temblor de piernas)",
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
		]
	};
	var fl = new FuzzyLogic();
                </script>
            </Helmet>
        </div>
    )
}

Fuzzy.propTypes = {

}

export default Fuzzy

