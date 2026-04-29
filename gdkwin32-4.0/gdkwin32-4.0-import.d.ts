import type GdkWin3240 from '@girs/gdkwin32-4.0';

declare global {
    export interface GjsGiImports {
        GdkWin32: typeof GdkWin3240;
    }
}

export default GjsGiImports;
