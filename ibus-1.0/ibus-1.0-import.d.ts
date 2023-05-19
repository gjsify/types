

import IBus10 from '@girs/ibus-1.0';

declare global {
    export interface GjsGiImports {
        IBus: typeof IBus10;
    }
}

export default GjsGiImports;


