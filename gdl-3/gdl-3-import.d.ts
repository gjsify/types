
import Gdl from './gdl-3.js';

declare global {
    export interface GjsGiImports {
        Gdl: typeof Gdl;
    }
}

export default GjsGiImports;


