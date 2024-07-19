import Xfixes40 from '@girs/xfixes-4.0';

declare global {
    export interface GjsGiImports {
        xfixes: typeof Xfixes40;
    }
}

export default GjsGiImports;
