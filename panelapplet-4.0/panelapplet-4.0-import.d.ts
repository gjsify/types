
import PanelApplet from './panelapplet-4.0.js';

declare global {
    export interface GjsGiImports {
        PanelApplet: typeof PanelApplet;
    }
}

export default GjsGiImports;


