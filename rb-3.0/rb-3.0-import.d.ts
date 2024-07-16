
import RB from './rb-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        RB: typeof RB;
    }
}

export default GjsGiImports;


