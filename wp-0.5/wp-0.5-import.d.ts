
import Wp from './wp-0.5.js';

declare global {
    export interface GjsGiImports {
        Wp: typeof Wp;
    }
}

export default GjsGiImports;


