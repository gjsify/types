
import GPlugin from './gplugin-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GPlugin: typeof GPlugin;
    }
}

export default GjsGiImports;


