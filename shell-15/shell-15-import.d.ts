import Shell15 from '@girs/shell-15';

declare global {
    export interface GjsGiImports {
        Shell: typeof Shell15;
    }
}

export default GjsGiImports;
