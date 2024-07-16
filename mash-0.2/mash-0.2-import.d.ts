
import Mash from './mash-0.2.d.ts';

declare global {
    export interface GjsGiImports {
        Mash: typeof Mash;
    }
}

export default GjsGiImports;


