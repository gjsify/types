
import Bamf from './bamf-3.d.ts';

declare global {
    export interface GjsGiImports {
        Bamf: typeof Bamf;
    }
}

export default GjsGiImports;


