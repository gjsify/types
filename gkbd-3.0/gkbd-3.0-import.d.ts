
import Gkbd30 from '@girs/gkbd-3.0';

declare global {
    export interface GjsGiImports {
        Gkbd: typeof Gkbd30;
    }
}

export default GjsGiImports;


