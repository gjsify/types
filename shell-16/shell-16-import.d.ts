import Shell16 from '@girs/shell-16';

declare global {
    export interface GjsGiImports {
        Shell: typeof Shell16;
    }
}

export default GjsGiImports;
