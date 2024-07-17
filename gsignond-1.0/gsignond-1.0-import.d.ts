
import GSignond from './gsignond-1.0.js';

declare global {
    export interface GjsGiImports {
        GSignond: typeof GSignond;
    }
}

export default GjsGiImports;


