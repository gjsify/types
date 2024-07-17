
import Libinsane from './libinsane-1.0.js';

declare global {
    export interface GjsGiImports {
        Libinsane: typeof Libinsane;
    }
}

export default GjsGiImports;


