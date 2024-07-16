
import Cogl from './cogl-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl;
    }
}

export default GjsGiImports;


