
import Peas from './peas-2.d.ts';

declare global {
    export interface GjsGiImports {
        Peas: typeof Peas;
    }
}

export default GjsGiImports;


