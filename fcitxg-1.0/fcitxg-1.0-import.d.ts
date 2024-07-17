
import FcitxG from './fcitxg-1.0.js';

declare global {
    export interface GjsGiImports {
        FcitxG: typeof FcitxG;
    }
}

export default GjsGiImports;


