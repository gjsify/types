
import GSound from './gsound-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GSound: typeof GSound;
    }
}

export default GjsGiImports;


