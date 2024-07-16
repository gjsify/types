
import Egg from './egg-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Egg: typeof Egg;
    }
}

export default GjsGiImports;


