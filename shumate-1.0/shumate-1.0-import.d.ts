
import Shumate from './shumate-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Shumate: typeof Shumate;
    }
}

export default GjsGiImports;


