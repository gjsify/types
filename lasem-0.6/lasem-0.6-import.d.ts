import type Lasem06 from '@girs/lasem-0.6';

declare global {
    export interface GjsGiImports {
        Lasem: typeof Lasem06;
    }
}

export default GjsGiImports;
