
import Libproxy from './libproxy-1.0.js';

declare global {
    export interface GjsGiImports {
        Libproxy: typeof Libproxy;
    }
}

export default GjsGiImports;


