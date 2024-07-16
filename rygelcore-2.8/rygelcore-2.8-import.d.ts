
import RygelCore from './rygelcore-2.8.d.ts';

declare global {
    export interface GjsGiImports {
        RygelCore: typeof RygelCore;
    }
}

export default GjsGiImports;


