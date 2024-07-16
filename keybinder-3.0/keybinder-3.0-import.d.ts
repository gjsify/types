
import Keybinder from './keybinder-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Keybinder: typeof Keybinder;
    }
}

export default GjsGiImports;


