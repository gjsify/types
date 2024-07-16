
import GooCanvas from './goocanvas-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        GooCanvas: typeof GooCanvas;
    }
}

export default GjsGiImports;


