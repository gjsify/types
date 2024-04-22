
import Ide45 from '@girs/ide-45';

declare global {
    export interface GjsGiImports {
        Ide: typeof Ide45;
    }
}

export default GjsGiImports;


