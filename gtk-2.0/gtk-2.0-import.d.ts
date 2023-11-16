
import Gtk20 from '@girs/gtk-2.0';

declare global {
    export interface GjsGiImports {
        Gtk: typeof Gtk20;
    }
}

export default GjsGiImports;


