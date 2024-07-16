
import RestExtras from './restextras-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        RestExtras: typeof RestExtras;
    }
}

export default GjsGiImports;


