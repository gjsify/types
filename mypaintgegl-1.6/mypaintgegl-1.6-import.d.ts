
import MyPaintGegl from './mypaintgegl-1.6.d.ts';

declare global {
    export interface GjsGiImports {
        MyPaintGegl: typeof MyPaintGegl;
    }
}

export default GjsGiImports;


