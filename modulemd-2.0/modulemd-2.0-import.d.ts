
import Modulemd from './modulemd-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Modulemd: typeof Modulemd;
    }
}

export default GjsGiImports;


