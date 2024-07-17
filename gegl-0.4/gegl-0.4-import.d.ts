
import Gegl from './gegl-0.4.js';

declare global {
    export interface GjsGiImports {
        Gegl: typeof Gegl;
    }
}

export default GjsGiImports;


