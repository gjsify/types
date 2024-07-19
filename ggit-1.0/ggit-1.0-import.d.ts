import Ggit10 from '@girs/ggit-1.0';

declare global {
    export interface GjsGiImports {
        Ggit: typeof Ggit10;
    }
}

export default GjsGiImports;
