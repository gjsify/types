
import Tepl from './tepl-6.d.ts';

declare global {
    export interface GjsGiImports {
        Tepl: typeof Tepl;
    }
}

export default GjsGiImports;


