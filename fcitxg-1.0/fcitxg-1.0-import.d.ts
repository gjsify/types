
import FcitxG10 from '@girs/fcitxg-1.0';

declare global {
    export interface GjsGiImports {
        FcitxG: typeof FcitxG10;
    }
}

export default GjsGiImports;


