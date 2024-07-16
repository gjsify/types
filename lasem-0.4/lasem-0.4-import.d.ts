
import Lasem from './lasem-0.4.d.ts';

declare global {
    export interface GjsGiImports {
        Lasem: typeof Lasem;
    }
}

export default GjsGiImports;


