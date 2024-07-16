
import win32 from './win32-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        win32: typeof win32;
    }
}

export default GjsGiImports;


