import Polkit10 from '@girs/polkit-1.0';

declare global {
    export interface GjsGiImports {
        Polkit: typeof Polkit10;
    }
}

export default GjsGiImports;
