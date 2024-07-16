
import Eog from './eog-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Eog: typeof Eog;
    }
}

export default GjsGiImports;


