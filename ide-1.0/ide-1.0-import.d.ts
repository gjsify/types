
import Ide10 from '@girs/ide-1.0';


declare global {
    export interface GjsGiImports {
        Ide: typeof Ide10;
    }
}

export default GjsGiImports;


