import GrlPls03 from '@girs/grlpls-0.3';

declare global {
    export interface GjsGiImports {
        GrlPls: typeof GrlPls03;
    }
}

export default GjsGiImports;
