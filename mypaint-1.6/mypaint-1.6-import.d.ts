
import MyPaint from './mypaint-1.6.js';

declare global {
    export interface GjsGiImports {
        MyPaint: typeof MyPaint;
    }
}

export default GjsGiImports;


