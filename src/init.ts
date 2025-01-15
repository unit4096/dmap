import scene from './globals/scene'
import camera from './globals/camera'
import renderer from './globals/renderer'
import controls from './globals/controls'
import grid from './globals/grid'
import lights from './globals/lights'
import { setupRaycaster } from './globals/raycaster'
import { getSkyboxTexture } from './globals/skybox'
import { Clock } from 'three'

export default async function init() {
    scene.add(...lights, grid)
    window.addEventListener('resize', onWindowResize)
    renderer.setAnimationLoop(animate)
    const envMap = await getSkyboxTexture()
    scene.background = envMap
    setupRaycaster()
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
}

const clock = new Clock()
function animate() {

    const delta = clock.getDelta()
    controls.update(delta)

    render()
}

function render() {
    renderer.render(scene, camera)
}
