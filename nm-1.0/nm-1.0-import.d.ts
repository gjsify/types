
import NM from './nm-1.0.js';

declare global {
    export interface GjsGiImports {
        NM: typeof NM;
    }
}

export default GjsGiImports;


