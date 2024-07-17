
import GMenu from './gmenu-3.0.js';

declare global {
    export interface GjsGiImports {
        GMenu: typeof GMenu;
    }
}

export default GjsGiImports;


