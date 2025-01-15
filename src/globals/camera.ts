import { PerspectiveCamera } from "three";

const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 100, 100000000)
camera.position.set(400000, 200000, 0)

export default camera