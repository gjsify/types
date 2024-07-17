
import Gandiva from './gandiva-1.0.js';

declare global {
    export interface GjsGiImports {
        Gandiva: typeof Gandiva;
    }
}

export default GjsGiImports;


