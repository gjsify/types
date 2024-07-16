
import Fcitx from './fcitx-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Fcitx: typeof Fcitx;
    }
}

export default GjsGiImports;


