
import Libosinfo from './libosinfo-1.0.js';

declare global {
    export interface GjsGiImports {
        Libosinfo: typeof Libosinfo;
    }
}

export default GjsGiImports;


