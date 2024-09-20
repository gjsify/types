import Gimp30 from '@girs/gimp-3.0';

declare global {
    export interface GjsGiImports {
        Gimp: typeof Gimp30;
    }
}

export default GjsGiImports;
