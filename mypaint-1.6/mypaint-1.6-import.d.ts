
import MyPaint16 from '@girs/mypaint-1.6';

declare global {
    export interface GjsGiImports {
        MyPaint: typeof MyPaint16;
    }
}

export default GjsGiImports;


