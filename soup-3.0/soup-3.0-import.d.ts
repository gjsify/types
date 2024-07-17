
import Soup from './soup-3.0.js';

declare global {
    export interface GjsGiImports {
        Soup: typeof Soup;
    }
}

export default GjsGiImports;


