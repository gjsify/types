
import Json10 from '@girs/json-1.0';


declare global {
    export interface GjsGiImports {
        Json: typeof Json10;
    }
}

export default GjsGiImports;


