import Keybinder30 from '@girs/keybinder-3.0';

declare global {
    export interface GjsGiImports {
        Keybinder: typeof Keybinder30;
    }
}

export default GjsGiImports;
