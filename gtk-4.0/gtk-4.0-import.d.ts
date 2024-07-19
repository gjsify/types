import Gtk40 from '@girs/gtk-4.0';

declare global {
    export interface GjsGiImports {
        Gtk: typeof Gtk40;
    }
}

export default GjsGiImports;
