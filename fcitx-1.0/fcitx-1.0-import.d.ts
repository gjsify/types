import Fcitx10 from '@girs/fcitx-1.0';

declare global {
    export interface GjsGiImports {
        Fcitx: typeof Fcitx10;
    }
}

export default GjsGiImports;
