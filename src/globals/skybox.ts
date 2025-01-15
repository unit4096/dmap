import { DataTexture, EquirectangularReflectionMapping } from "three"
import { EXRLoader } from "three-stdlib"

export async function getSkyboxTexture() {
    return new Promise<DataTexture>((res, rej) => {
        const skyboxUrl = "https://acg-media.struffelproductions.com/file/ambientCG-Web/media/hdri-preview/NightSkyHDRI001/NightSkyHDRI001_LQ.exr" //"/NightSkyHDRI001_2K-HDR.exr"
        new EXRLoader().load(skyboxUrl, (texture) => {
            texture.mapping = EquirectangularReflectionMapping
            res(texture)
        }, undefined, rej)
    })
}

