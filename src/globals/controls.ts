import CameraControls from "camera-controls";
import camera from "./camera";
import renderer from "./renderer";

import {
    Vector2,
    Vector3,
    Vector4,
    Quaternion,
    Matrix4,
    Spherical,
    Box3,
    Sphere,
    Raycaster,
} from 'three';

const subsetOfTHREE = {
    Vector2: Vector2,
    Vector3: Vector3,
    Vector4: Vector4,
    Quaternion: Quaternion,
    Matrix4: Matrix4,
    Spherical: Spherical,
    Box3: Box3,
    Sphere: Sphere,
    Raycaster: Raycaster,
}

CameraControls.install({ THREE: subsetOfTHREE })

const controls = new CameraControls(camera, renderer.domElement)

controls.dampingFactor = 0.05


controls.minDistance = 10000
controls.maxDistance = 50000000

controls.maxPolarAngle = Math.PI

export default controls