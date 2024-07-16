
import Gdm from './gdm-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gdm: typeof Gdm;
    }
}

export default GjsGiImports;


