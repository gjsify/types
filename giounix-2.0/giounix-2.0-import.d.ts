
import GioUnix20 from '@girs/giounix-2.0';

declare global {
    export interface GjsGiImports {
        GioUnix: typeof GioUnix20;
    }
}

export default GjsGiImports;


