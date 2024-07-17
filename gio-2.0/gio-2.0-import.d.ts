
import Gio from './gio-2.0.js';

declare global {
    export interface GjsGiImports {
        Gio: typeof Gio;
    }
}

export default GjsGiImports;


