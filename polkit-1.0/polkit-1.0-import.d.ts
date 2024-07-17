
import Polkit from './polkit-1.0.js';

declare global {
    export interface GjsGiImports {
        Polkit: typeof Polkit;
    }
}

export default GjsGiImports;


