
import Gio from './gio-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gio: typeof Gio;
    }
}

export default GjsGiImports;


