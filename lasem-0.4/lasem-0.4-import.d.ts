
import Lasem from './lasem-0.4.js';

declare global {
    export interface GjsGiImports {
        Lasem: typeof Lasem;
    }
}

export default GjsGiImports;


