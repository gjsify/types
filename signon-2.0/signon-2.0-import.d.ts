
import Signon from './signon-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Signon: typeof Signon;
    }
}

export default GjsGiImports;


