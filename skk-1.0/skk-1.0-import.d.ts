
import Skk from './skk-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Skk: typeof Skk;
    }
}

export default GjsGiImports;


