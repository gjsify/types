import GnomeKeyring10 from '@girs/gnomekeyring-1.0';

declare global {
    export interface GjsGiImports {
        GnomeKeyring: typeof GnomeKeyring10;
    }
}

export default GjsGiImports;
