
import Zeitgeist from './zeitgeist-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Zeitgeist: typeof Zeitgeist;
    }
}

export default GjsGiImports;


