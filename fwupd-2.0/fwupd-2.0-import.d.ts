
import Fwupd from './fwupd-2.0.js';

declare global {
    export interface GjsGiImports {
        Fwupd: typeof Fwupd;
    }
}

export default GjsGiImports;


