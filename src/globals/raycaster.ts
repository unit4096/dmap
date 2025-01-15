import { Raycaster, Vector2 } from "three";
import camera from "./camera";
import scene from "./scene";
import controls from "./controls";

const raycaster = new Raycaster()

export function setupRaycaster() {
    const mouse = new Vector2()
    window.addEventListener('click', (event) => {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1

        raycaster.setFromCamera(mouse, camera)

        const intersects = raycaster.intersectObjects(scene.children, false)

        if (intersects.length > 0) {

            controls.fitToSphere(intersects[0].object, true)
        }

    })
}

export default raycaster