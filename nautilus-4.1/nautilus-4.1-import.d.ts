
import type Nautilus41 from '@girs/nautilus-4.1';

declare global {
    export interface GjsGiImports {
        Nautilus: typeof Nautilus41;
    }
}

export default GjsGiImports;


