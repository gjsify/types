import type FoundryGtk1 from '@girs/foundrygtk-1';

declare global {
    export interface GjsGiImports {
        FoundryGtk: typeof FoundryGtk1;
    }
}

export default GjsGiImports;
