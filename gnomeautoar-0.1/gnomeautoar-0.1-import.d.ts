import GnomeAutoar01 from '@girs/gnomeautoar-0.1';

declare global {
    export interface GjsGiImports {
        GnomeAutoar: typeof GnomeAutoar01;
    }
}

export default GjsGiImports;
