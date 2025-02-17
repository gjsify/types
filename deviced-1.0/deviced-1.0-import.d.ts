import Deviced10 from '@girs/deviced-1.0';

declare global {
    export interface GjsGiImports {
        Deviced: typeof Deviced10;
    }
}

export default GjsGiImports;
