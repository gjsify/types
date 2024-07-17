
import Gspell from './gspell-1.js';

declare global {
    export interface GjsGiImports {
        Gspell: typeof Gspell;
    }
}

export default GjsGiImports;


