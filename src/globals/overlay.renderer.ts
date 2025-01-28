import { CSS2DRenderer } from "three-stdlib";
const parent = document.querySelector<HTMLDivElement>("#labels")!
const overlayRenderer = new CSS2DRenderer()
overlayRenderer.setSize( window.innerWidth, window.innerHeight );
overlayRenderer.domElement.style.position = 'absolute';
overlayRenderer.domElement.style.top = '0px';

parent.appendChild(overlayRenderer.domElement)
overlayRenderer.domElement.style.pointerEvents = 'none';

export default overlayRenderer