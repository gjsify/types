
import Gedit from './gedit-3.0.js';

declare global {
    export interface GjsGiImports {
        Gedit: typeof Gedit;
    }
}

export default GjsGiImports;


