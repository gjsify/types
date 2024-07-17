
import Modulemd from './modulemd-2.0.js';

declare global {
    export interface GjsGiImports {
        Modulemd: typeof Modulemd;
    }
}

export default GjsGiImports;


