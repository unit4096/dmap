import { expect, test } from 'vitest'
import { fromSE, toSE } from '../helpers/coords'
import { Color, Vector3 } from 'three'

test('GPS from SE', () => {
  const res = fromSE("GPS:COR Si/Mg/Au:4934662.06:-4878957.58:-8867567.4:#FF75C9F1:")
  expect(res.type).toBe("GPS")
  expect(res.name).toBe("COR Si/Mg/Au")
  expect(res.position.x).toBe(4934662.06)
  expect(res.position.y).toBe(-4878957.58)
  expect(res.position.z).toBe(-8867567.4)
  expect(res.color).toEqual(new Color("#FF75C9"))
})

test('GPS to SE', () => {

  const res = toSE("T Test 4", new Vector3(5, -8, 14.35), new Color("#1258F1"))
  expect(res).toBe("GPS:T Test 4:5:-8:14.35:#1258F1FF")
})