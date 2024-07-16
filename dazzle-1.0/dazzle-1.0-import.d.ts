
import Dazzle from './dazzle-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Dazzle: typeof Dazzle;
    }
}

export default GjsGiImports;


