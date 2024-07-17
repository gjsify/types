
import GioUnix from './giounix-2.0.js';

declare global {
    export interface GjsGiImports {
        GioUnix: typeof GioUnix;
    }
}

export default GjsGiImports;


