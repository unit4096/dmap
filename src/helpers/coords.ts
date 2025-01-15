import { Color, Vector3 } from "three"

/**
 * 
 * @param seCoords ex: GPS:COR Si/Mg/Au:4934662.06:-4878957.58:-8867567.4:#FF75C9F1:
 */
export function fromSE(seCoords: string) {
    const parts = seCoords.split(":")
    console.log(parts)
    return {
        type: parts[0], // GPS
        name: parts[1],
        position: new Vector3(Number(parts[2]), Number(parts[3]), Number(parts[4])),
        color: new Color(parts[5].substring(0, 7))
    }
}

export function toSE(name: string, pos: Vector3, color: Color) {
    const parts = [
        "GPS",
        name,
        pos.x,
        pos.y,
        pos.z,
        `#${color.getHexString().toUpperCase()}FF`,
    ]

    return parts.join(":")
}