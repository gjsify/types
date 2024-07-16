
import Snapd from './snapd-2.d.ts';

declare global {
    export interface GjsGiImports {
        Snapd: typeof Snapd;
    }
}

export default GjsGiImports;


