import Gck2 from '@girs/gck-2';

declare global {
    export interface GjsGiImports {
        Gck: typeof Gck2;
    }
}

export default GjsGiImports;
