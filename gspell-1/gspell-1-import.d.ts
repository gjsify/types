
import Gspell from './gspell-1.d.ts';

declare global {
    export interface GjsGiImports {
        Gspell: typeof Gspell;
    }
}

export default GjsGiImports;


