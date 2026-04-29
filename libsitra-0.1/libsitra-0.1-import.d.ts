import type Libsitra01 from '@girs/libsitra-0.1';

declare global {
    export interface GjsGiImports {
        Libsitra: typeof Libsitra01;
    }
}

export default GjsGiImports;
