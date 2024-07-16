
import Gtk from './gtk-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gtk: typeof Gtk;
    }
}

export default GjsGiImports;


