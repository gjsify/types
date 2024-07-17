
import Grss from './grss-0.7.js';

declare global {
    export interface GjsGiImports {
        Grss: typeof Grss;
    }
}

export default GjsGiImports;


