
import Gandiva10 from '@girs/gandiva-1.0';


declare global {
    export interface GjsGiImports {
        Gandiva: typeof Gandiva10;
    }
}

export default GjsGiImports;


