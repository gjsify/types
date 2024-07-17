
import Pluma from './pluma-1.0.js';

declare global {
    export interface GjsGiImports {
        Pluma: typeof Pluma;
    }
}

export default GjsGiImports;


