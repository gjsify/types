
import Fep from './fep-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Fep: typeof Fep;
    }
}

export default GjsGiImports;


