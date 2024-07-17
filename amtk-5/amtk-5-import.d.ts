
import Amtk from './amtk-5.js';

declare global {
    export interface GjsGiImports {
        Amtk: typeof Amtk;
    }
}

export default GjsGiImports;


