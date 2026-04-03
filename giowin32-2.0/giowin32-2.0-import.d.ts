import type GioWin3220 from '@girs/giowin32-2.0';

declare global {
    export interface GjsGiImports {
        GioWin32: typeof GioWin3220;
    }
}

export default GjsGiImports;
