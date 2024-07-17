
import Gepub from './gepub-0.7.js';

declare global {
    export interface GjsGiImports {
        Gepub: typeof Gepub;
    }
}

export default GjsGiImports;


