
import type Msg1 from '@girs/msg-1';

declare global {
    export interface GjsGiImports {
        Msg: typeof Msg1;
    }
}

export default GjsGiImports;


