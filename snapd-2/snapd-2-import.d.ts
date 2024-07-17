
import Snapd from './snapd-2.js';

declare global {
    export interface GjsGiImports {
        Snapd: typeof Snapd;
    }
}

export default GjsGiImports;


