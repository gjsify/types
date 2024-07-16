
import Granite from './granite-7.0.d.ts';

declare global {
    export interface GjsGiImports {
        Granite: typeof Granite;
    }
}

export default GjsGiImports;


