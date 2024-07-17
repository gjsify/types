
import CMenu from './cmenu-3.0.js';

declare global {
    export interface GjsGiImports {
        CMenu: typeof CMenu;
    }
}

export default GjsGiImports;


