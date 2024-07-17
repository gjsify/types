
import Mx from './mx-2.0.js';

declare global {
    export interface GjsGiImports {
        Mx: typeof Mx;
    }
}

export default GjsGiImports;


