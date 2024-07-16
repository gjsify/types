
import Mks from './mks-1.d.ts';

declare global {
    export interface GjsGiImports {
        Mks: typeof Mks;
    }
}

export default GjsGiImports;


