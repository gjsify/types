
import Jcat from './jcat-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Jcat: typeof Jcat;
    }
}

export default GjsGiImports;


