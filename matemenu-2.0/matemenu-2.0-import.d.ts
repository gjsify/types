import MateMenu20 from '@girs/matemenu-2.0';

declare global {
    export interface GjsGiImports {
        MateMenu: typeof MateMenu20;
    }
}

export default GjsGiImports;
