import Adw1 from '@girs/adw-1';

declare global {
    export interface GjsGiImports {
        Adw: typeof Adw1;
    }
}

export default GjsGiImports;
