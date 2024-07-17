
import Camel from './camel-1.2.js';

declare global {
    export interface GjsGiImports {
        Camel: typeof Camel;
    }
}

export default GjsGiImports;


