
import MatePanelApplet from './matepanelapplet-4.0.js';

declare global {
    export interface GjsGiImports {
        MatePanelApplet: typeof MatePanelApplet;
    }
}

export default GjsGiImports;


