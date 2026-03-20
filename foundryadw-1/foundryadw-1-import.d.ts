import type FoundryAdw1 from '@girs/foundryadw-1';

declare global {
    export interface GjsGiImports {
        FoundryAdw: typeof FoundryAdw1;
    }
}

export default GjsGiImports;
