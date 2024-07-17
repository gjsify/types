
import LangTag from './langtag-0.6.js';

declare global {
    export interface GjsGiImports {
        LangTag: typeof LangTag;
    }
}

export default GjsGiImports;


