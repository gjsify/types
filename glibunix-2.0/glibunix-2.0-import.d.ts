
import GLibUnix20 from '@girs/glibunix-2.0';


declare global {
    export interface GjsGiImports {
        GLibUnix: typeof GLibUnix20;
    }
}

export default GjsGiImports;


