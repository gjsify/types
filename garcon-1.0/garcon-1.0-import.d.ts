
import Garcon from './garcon-1.0.js';

declare global {
    export interface GjsGiImports {
        Garcon: typeof Garcon;
    }
}

export default GjsGiImports;


