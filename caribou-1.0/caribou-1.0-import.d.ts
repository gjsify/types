
import Caribou from './caribou-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Caribou: typeof Caribou;
    }
}

export default GjsGiImports;


