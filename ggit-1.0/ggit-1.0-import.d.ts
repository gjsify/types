
import Ggit from './ggit-1.0.js';

declare global {
    export interface GjsGiImports {
        Ggit: typeof Ggit;
    }
}

export default GjsGiImports;


