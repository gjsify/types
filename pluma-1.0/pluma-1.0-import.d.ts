
import Pluma from './pluma-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Pluma: typeof Pluma;
    }
}

export default GjsGiImports;


