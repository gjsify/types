
import MateMenu from './matemenu-2.0.js';

declare global {
    export interface GjsGiImports {
        MateMenu: typeof MateMenu;
    }
}

export default GjsGiImports;


