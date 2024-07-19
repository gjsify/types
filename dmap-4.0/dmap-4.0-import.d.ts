import Dmap40 from '@girs/dmap-4.0';

declare global {
    export interface GjsGiImports {
        Dmap: typeof Dmap40;
    }
}

export default GjsGiImports;
