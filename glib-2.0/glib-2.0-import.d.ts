
import GLib from './glib-2.0.js';

declare global {
    export interface GjsGiImports {
        GLib: typeof GLib;
    }
}

export default GjsGiImports;


