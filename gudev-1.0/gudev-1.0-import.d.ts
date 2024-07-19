import GUdev10 from '@girs/gudev-1.0';

declare global {
    export interface GjsGiImports {
        GUdev: typeof GUdev10;
    }
}

export default GjsGiImports;
