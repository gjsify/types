
import Gom from './gom-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gom: typeof Gom;
    }
}

export default GjsGiImports;


