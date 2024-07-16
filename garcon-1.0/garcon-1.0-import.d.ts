
import Garcon from './garcon-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Garcon: typeof Garcon;
    }
}

export default GjsGiImports;


