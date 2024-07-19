import Fontconfig20 from '@girs/fontconfig-2.0';

declare global {
    export interface GjsGiImports {
        fontconfig: typeof Fontconfig20;
    }
}

export default GjsGiImports;
