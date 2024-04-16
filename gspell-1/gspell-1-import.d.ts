
import Gspell1 from '@girs/gspell-1';


declare global {
    export interface GjsGiImports {
        Gspell: typeof Gspell1;
    }
}

export default GjsGiImports;


