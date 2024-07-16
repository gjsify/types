
import Gedit from './gedit-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gedit: typeof Gedit;
    }
}

export default GjsGiImports;


