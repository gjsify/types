
import Egg from './egg-1.0.js';

declare global {
    export interface GjsGiImports {
        Egg: typeof Egg;
    }
}

export default GjsGiImports;


