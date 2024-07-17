
import win32 from './win32-1.0.js';

declare global {
    export interface GjsGiImports {
        win32: typeof win32;
    }
}

export default GjsGiImports;


