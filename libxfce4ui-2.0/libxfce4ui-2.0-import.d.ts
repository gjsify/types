
import Libxfce4ui from './libxfce4ui-2.0.js';

declare global {
    export interface GjsGiImports {
        Libxfce4ui: typeof Libxfce4ui;
    }
}

export default GjsGiImports;


