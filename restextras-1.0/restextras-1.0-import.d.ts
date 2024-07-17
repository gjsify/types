
import RestExtras from './restextras-1.0.js';

declare global {
    export interface GjsGiImports {
        RestExtras: typeof RestExtras;
    }
}

export default GjsGiImports;


