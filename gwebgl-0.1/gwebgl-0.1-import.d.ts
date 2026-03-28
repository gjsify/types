import type Gwebgl01 from '@girs/gwebgl-0.1';

declare global {
    export interface GjsGiImports {
        Gwebgl: typeof Gwebgl01;
    }
}

export default GjsGiImports;
