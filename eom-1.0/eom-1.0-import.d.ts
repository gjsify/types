
import Eom from './eom-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Eom: typeof Eom;
    }
}

export default GjsGiImports;


