import type GLibWin3220 from '@girs/glibwin32-2.0';

declare global {
    export interface GjsGiImports {
        GLibWin32: typeof GLibWin3220;
    }
}

export default GjsGiImports;
