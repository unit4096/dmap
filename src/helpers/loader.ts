import { Mesh, MeshPhongMaterial, SphereGeometry, Texture, TextureLoader } from "three"
import { fromSE } from "./coords"

const textureLoader = new TextureLoader()


export async function loadTexture(url: string) {
    return new Promise<Texture>((res, rej) => {
        textureLoader.load(url, (texture) => {
            res(texture)
        }, undefined, rej)
    })
}

const pointsGeometry = new SphereGeometry(50000)
const pointsMaterial = new MeshPhongMaterial({ color: 0xffffff, flatShading: true })

export function loadGPSPoints(points: string[]) {
    return points.map(p => {
        const data = fromSE(p)
        console.log(data)
        const mat = pointsMaterial.clone()
        mat.color.copy(data.color)
        const m = new Mesh(pointsGeometry, mat)
        m.position.copy(data.position)
        return m
    })

}