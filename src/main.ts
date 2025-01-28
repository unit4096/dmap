import './style.css'

import scene from './globals/scene'
import init from './init'
import { loadGPSPoints } from './helpers/loader'
import planetData from './data/planets.json'
import pointData from './data/points.json'
import { loadPlanets } from './planets/planet.loader'
import { createLabels, createPlanets as createPlanetsUI } from './planets/planets.ui'

run()

async function run() {
    await init()
    const planets = await loadPlanets(planetData)
    const points = loadGPSPoints(pointData)
    let labels = createLabels(planets)
    scene.add(...labels)
    scene.add(...planets, ...points)

    createPlanetsUI(planets)
}
