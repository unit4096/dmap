import { AmbientLight, DirectionalLight } from "three"

const dirLight1 = new DirectionalLight(0xffffff, 3)
dirLight1.position.set(1, 1, 1)

const dirLight2 = new DirectionalLight(0x002288, 3)
dirLight2.position.set(- 1, - 1, - 1)

const ambientLight = new AmbientLight(0x555555)

const lights = [dirLight1, dirLight2, ambientLight]
export default lights