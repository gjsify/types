
import GLib from './glib-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        GLib: typeof GLib;
    }
}

export default GjsGiImports;


