
import Handy from './handy-1.d.ts';

declare global {
    export interface GjsGiImports {
        Handy: typeof Handy;
    }
}

export default GjsGiImports;


