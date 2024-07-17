
import Gtk from './gtk-4.0.js';

declare global {
    export interface GjsGiImports {
        Gtk: typeof Gtk;
    }
}

export default GjsGiImports;


