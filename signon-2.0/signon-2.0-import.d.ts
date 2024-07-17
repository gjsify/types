
import Signon from './signon-2.0.js';

declare global {
    export interface GjsGiImports {
        Signon: typeof Signon;
    }
}

export default GjsGiImports;


