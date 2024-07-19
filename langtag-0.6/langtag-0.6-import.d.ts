import LangTag06 from '@girs/langtag-0.6';

declare global {
    export interface GjsGiImports {
        LangTag: typeof LangTag06;
    }
}

export default GjsGiImports;
