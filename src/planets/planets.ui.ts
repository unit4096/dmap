import { Object3D } from "three";
import { Planet } from "./Planet";
import controls from "../globals/controls";

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

export function createPlanets(planets: Object3D[]) {
    const rows = planets.map(createPlanetRow)

    parent.append(...rows)
}