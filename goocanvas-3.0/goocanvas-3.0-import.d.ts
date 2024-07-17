
import GooCanvas from './goocanvas-3.0.js';

declare global {
    export interface GjsGiImports {
        GooCanvas: typeof GooCanvas;
    }
}

export default GjsGiImports;


