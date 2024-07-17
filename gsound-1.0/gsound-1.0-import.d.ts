
import GSound from './gsound-1.0.js';

declare global {
    export interface GjsGiImports {
        GSound: typeof GSound;
    }
}

export default GjsGiImports;


