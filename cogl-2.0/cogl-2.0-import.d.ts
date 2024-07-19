import Cogl20 from '@girs/cogl-2.0';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl20;
    }
}

export default GjsGiImports;
