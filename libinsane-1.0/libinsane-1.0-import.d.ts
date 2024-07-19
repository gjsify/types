import Libinsane10 from '@girs/libinsane-1.0';

declare global {
    export interface GjsGiImports {
        Libinsane: typeof Libinsane10;
    }
}

export default GjsGiImports;
