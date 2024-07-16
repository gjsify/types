
import RygelRenderer from './rygelrenderer-2.8.d.ts';

declare global {
    export interface GjsGiImports {
        RygelRenderer: typeof RygelRenderer;
    }
}

export default GjsGiImports;


