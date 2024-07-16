
import Xed from './xed-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Xed: typeof Xed;
    }
}

export default GjsGiImports;


