
import Wp from './wp-0.5.d.ts';

declare global {
    export interface GjsGiImports {
        Wp: typeof Wp;
    }
}

export default GjsGiImports;


