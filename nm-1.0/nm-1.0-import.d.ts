
import NM from './nm-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        NM: typeof NM;
    }
}

export default GjsGiImports;


