import type Shell9 from '@girs/shell-9';

declare global {
    export interface GjsGiImports {
        Shell: typeof Shell9;
    }
}

export default GjsGiImports;
