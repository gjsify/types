import Xmlb20 from '@girs/xmlb-2.0';

declare global {
    export interface GjsGiImports {
        Xmlb: typeof Xmlb20;
    }
}

export default GjsGiImports;
