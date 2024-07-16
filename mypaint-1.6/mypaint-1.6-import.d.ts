
import MyPaint from './mypaint-1.6.d.ts';

declare global {
    export interface GjsGiImports {
        MyPaint: typeof MyPaint;
    }
}

export default GjsGiImports;


