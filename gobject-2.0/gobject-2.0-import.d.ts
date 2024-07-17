
import GObject from './gobject-2.0.js';

declare global {
    export interface GjsGiImports {
        GObject: typeof GObject;
    }
}

export default GjsGiImports;


