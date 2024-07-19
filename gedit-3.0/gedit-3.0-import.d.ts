import Gedit30 from '@girs/gedit-3.0';

declare global {
    export interface GjsGiImports {
        Gedit: typeof Gedit30;
    }
}

export default GjsGiImports;
