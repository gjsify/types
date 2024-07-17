
import RB from './rb-3.0.js';

declare global {
    export interface GjsGiImports {
        RB: typeof RB;
    }
}

export default GjsGiImports;


