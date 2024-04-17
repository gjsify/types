
import GjsDBus10 from '@girs/gjsdbus-1.0';

declare global {
    export interface GjsGiImports {
        GjsDBus: typeof GjsDBus10;
    }
}

export default GjsGiImports;


