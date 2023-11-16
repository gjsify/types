
import GSound10 from '@girs/gsound-1.0';

declare global {
    export interface GjsGiImports {
        GSound: typeof GSound10;
    }
}

export default GjsGiImports;


