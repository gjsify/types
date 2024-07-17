
import Cogl from './cogl-2.0.js';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl;
    }
}

export default GjsGiImports;


