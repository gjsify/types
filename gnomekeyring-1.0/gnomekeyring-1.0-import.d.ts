
import GnomeKeyring from './gnomekeyring-1.0.js';

declare global {
    export interface GjsGiImports {
        GnomeKeyring: typeof GnomeKeyring;
    }
}

export default GjsGiImports;


