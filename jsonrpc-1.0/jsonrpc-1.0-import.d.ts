
import Jsonrpc from './jsonrpc-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Jsonrpc: typeof Jsonrpc;
    }
}

export default GjsGiImports;


