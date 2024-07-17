
import Nemo from './nemo-3.0.js';

declare global {
    export interface GjsGiImports {
        Nemo: typeof Nemo;
    }
}

export default GjsGiImports;


