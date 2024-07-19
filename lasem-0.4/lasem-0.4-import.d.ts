import Lasem04 from '@girs/lasem-0.4';

declare global {
    export interface GjsGiImports {
        Lasem: typeof Lasem04;
    }
}

export default GjsGiImports;
