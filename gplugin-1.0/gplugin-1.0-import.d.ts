
import GPlugin from './gplugin-1.0.js';

declare global {
    export interface GjsGiImports {
        GPlugin: typeof GPlugin;
    }
}

export default GjsGiImports;


