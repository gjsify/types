import Jsonrpc10 from '@girs/jsonrpc-1.0';

declare global {
    export interface GjsGiImports {
        Jsonrpc: typeof Jsonrpc10;
    }
}

export default GjsGiImports;
