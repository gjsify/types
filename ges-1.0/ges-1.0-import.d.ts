
import GES from './ges-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GES: typeof GES;
    }
}

export default GjsGiImports;


