
import Jcat from './jcat-1.0.js';

declare global {
    export interface GjsGiImports {
        Jcat: typeof Jcat;
    }
}

export default GjsGiImports;


