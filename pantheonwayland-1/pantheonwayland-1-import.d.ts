import type PantheonWayland1 from '@girs/pantheonwayland-1';

declare global {
    export interface GjsGiImports {
        PantheonWayland: typeof PantheonWayland1;
    }
}

export default GjsGiImports;
