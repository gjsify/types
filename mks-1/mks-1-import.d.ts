
import Mks from './mks-1.js';

declare global {
    export interface GjsGiImports {
        Mks: typeof Mks;
    }
}

export default GjsGiImports;


