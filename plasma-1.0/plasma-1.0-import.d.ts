import Plasma10 from '@girs/plasma-1.0';

declare global {
    export interface GjsGiImports {
        Plasma: typeof Plasma10;
    }
}

export default GjsGiImports;
