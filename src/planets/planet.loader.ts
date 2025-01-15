import { Mesh, MeshStandardMaterial, SphereGeometry } from 'three'
import { loadTexture } from '../helpers/loader'
import { Planet } from './Planet'

export async function loadPlanets(planets: Planet[]) {
    return await Promise.all(planets.map(loadPlanet))
}

export async function loadPlanet(planet: Planet) {
    const texture = await loadTexture(planet.texture)
    const material = new MeshStandardMaterial({ map: texture })
    const m = new Mesh(
        new SphereGeometry(planet.diameter / 2),
        material,
    )
    m.position.set(...planet.position as [number, number, number])
    m.userData = { planet } // save planet data inside the 3D object
    return m
}