import Libproxy10 from '@girs/libproxy-1.0';

declare global {
    export interface GjsGiImports {
        Libproxy: typeof Libproxy10;
    }
}

export default GjsGiImports;
