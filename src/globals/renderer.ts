import { WebGLRenderer } from "three";

const canvas = document.querySelector<HTMLCanvasElement>("#main_canvas")!
const renderer = new WebGLRenderer({ antialias: true, canvas })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

export default renderer