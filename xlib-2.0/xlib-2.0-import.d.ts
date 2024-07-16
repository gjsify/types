
import xlib from './xlib-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        xlib: typeof xlib;
    }
}

export default GjsGiImports;


