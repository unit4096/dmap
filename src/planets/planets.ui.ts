import { Object3D } from "three";
import { Planet } from "./Planet";
import controls from "../globals/controls";
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
const parent = document.querySelector<HTMLDivElement>("#planets")!

export function createPlanetRow(planet: Object3D) {
    const planetData = planet.userData.planet as Planet

    const row = document.createElement("div")
    row.classList.add("planet-row")

    const text = document.createElement("h4")
    text.textContent = planetData.name

    const button = document.createElement("button")
    button.textContent = "show"

    button.addEventListener("click", () => {
        controls.fitToSphere(planet, true)
    })

    row.append(text, button)

    return row
}

export function createPlanetLabel(planet: Object3D) {

    const planetData = planet.userData.planet as Planet
    const text = document.createElement( 'div' )
    text.className = 'label'
    text.textContent = planetData.name

    const label = new CSS2DObject( text );
    label.position.copy( planet.position );
    return label
}


export function createLabels(planets: Object3D[])
{
    const labels = planets.map(createPlanetLabel)
    return labels; 
}


export function createPlanets(planets: Object3D[]) {
    const rows = planets.map(createPlanetRow)

    parent.append(...rows)
}