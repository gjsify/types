import GMenu30 from '@girs/gmenu-3.0';

declare global {
    export interface GjsGiImports {
        GMenu: typeof GMenu30;
    }
}

export default GjsGiImports;
