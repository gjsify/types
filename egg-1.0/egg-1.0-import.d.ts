
import Egg10 from '@girs/egg-1.0';


declare global {
    export interface GjsGiImports {
        Egg: typeof Egg10;
    }
}

export default GjsGiImports;


