
import Adw from './adw-1.js';

declare global {
    export interface GjsGiImports {
        Adw: typeof Adw;
    }
}

export default GjsGiImports;


