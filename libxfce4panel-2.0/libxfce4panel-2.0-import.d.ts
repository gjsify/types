
import Libxfce4panel from './libxfce4panel-2.0.js';

declare global {
    export interface GjsGiImports {
        Libxfce4panel: typeof Libxfce4panel;
    }
}

export default GjsGiImports;


