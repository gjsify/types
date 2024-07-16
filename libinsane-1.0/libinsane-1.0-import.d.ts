
import Libinsane from './libinsane-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Libinsane: typeof Libinsane;
    }
}

export default GjsGiImports;


