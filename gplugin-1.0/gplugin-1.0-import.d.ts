import GPlugin10 from '@girs/gplugin-1.0';

declare global {
    export interface GjsGiImports {
        GPlugin: typeof GPlugin10;
    }
}

export default GjsGiImports;
