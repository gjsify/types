
import Mash from './mash-0.2.js';

declare global {
    export interface GjsGiImports {
        Mash: typeof Mash;
    }
}

export default GjsGiImports;


