
import Win3210 from '@girs/win32-1.0';


declare global {
    export interface GjsGiImports {
        win32: typeof Win3210;
    }
}

export default GjsGiImports;


