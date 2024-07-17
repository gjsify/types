
import GTop from './gtop-2.0.js';

declare global {
    export interface GjsGiImports {
        GTop: typeof GTop;
    }
}

export default GjsGiImports;


