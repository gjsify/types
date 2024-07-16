
import Thunarx from './thunarx-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Thunarx: typeof Thunarx;
    }
}

export default GjsGiImports;


