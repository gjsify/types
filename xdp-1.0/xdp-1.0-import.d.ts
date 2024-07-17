
import Xdp from './xdp-1.0.js';

declare global {
    export interface GjsGiImports {
        Xdp: typeof Xdp;
    }
}

export default GjsGiImports;


