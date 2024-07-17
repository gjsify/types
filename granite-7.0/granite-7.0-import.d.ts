
import Granite from './granite-7.0.js';

declare global {
    export interface GjsGiImports {
        Granite: typeof Granite;
    }
}

export default GjsGiImports;


