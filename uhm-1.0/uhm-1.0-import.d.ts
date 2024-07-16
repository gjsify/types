
import Uhm from './uhm-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Uhm: typeof Uhm;
    }
}

export default GjsGiImports;


