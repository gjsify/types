
import xlib from './xlib-2.0.js';

declare global {
    export interface GjsGiImports {
        xlib: typeof xlib;
    }
}

export default GjsGiImports;


