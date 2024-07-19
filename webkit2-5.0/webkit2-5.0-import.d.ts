import WebKit250 from '@girs/webkit2-5.0';

declare global {
    export interface GjsGiImports {
        WebKit2: typeof WebKit250;
    }
}

export default GjsGiImports;
