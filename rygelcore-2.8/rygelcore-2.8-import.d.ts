
import RygelCore from './rygelcore-2.8.js';

declare global {
    export interface GjsGiImports {
        RygelCore: typeof RygelCore;
    }
}

export default GjsGiImports;


