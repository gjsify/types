
import Xmlb from './xmlb-2.0.js';

declare global {
    export interface GjsGiImports {
        Xmlb: typeof Xmlb;
    }
}

export default GjsGiImports;


