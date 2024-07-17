
import Jsonrpc from './jsonrpc-1.0.js';

declare global {
    export interface GjsGiImports {
        Jsonrpc: typeof Jsonrpc;
    }
}

export default GjsGiImports;


