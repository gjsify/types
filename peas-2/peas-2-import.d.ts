
import Peas from './peas-2.js';

declare global {
    export interface GjsGiImports {
        Peas: typeof Peas;
    }
}

export default GjsGiImports;


