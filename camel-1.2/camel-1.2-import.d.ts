
import Camel from './camel-1.2.d.ts';

declare global {
    export interface GjsGiImports {
        Camel: typeof Camel;
    }
}

export default GjsGiImports;


