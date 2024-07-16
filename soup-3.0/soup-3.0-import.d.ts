
import Soup from './soup-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Soup: typeof Soup;
    }
}

export default GjsGiImports;


