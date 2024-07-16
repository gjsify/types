
import Libproxy from './libproxy-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Libproxy: typeof Libproxy;
    }
}

export default GjsGiImports;


