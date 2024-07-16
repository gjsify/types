
import Gdl from './gdl-3.d.ts';

declare global {
    export interface GjsGiImports {
        Gdl: typeof Gdl;
    }
}

export default GjsGiImports;


