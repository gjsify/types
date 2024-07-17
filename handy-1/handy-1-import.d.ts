
import Handy from './handy-1.js';

declare global {
    export interface GjsGiImports {
        Handy: typeof Handy;
    }
}

export default GjsGiImports;


