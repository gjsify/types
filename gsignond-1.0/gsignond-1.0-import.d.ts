import GSignond10 from '@girs/gsignond-1.0';

declare global {
    export interface GjsGiImports {
        GSignond: typeof GSignond10;
    }
}

export default GjsGiImports;
