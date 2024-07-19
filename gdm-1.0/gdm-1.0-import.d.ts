import Gdm10 from '@girs/gdm-1.0';

declare global {
    export interface GjsGiImports {
        Gdm: typeof Gdm10;
    }
}

export default GjsGiImports;
