
import Nemo from './nemo-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Nemo: typeof Nemo;
    }
}

export default GjsGiImports;


