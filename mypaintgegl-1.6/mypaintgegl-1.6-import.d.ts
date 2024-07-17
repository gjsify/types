
import MyPaintGegl from './mypaintgegl-1.6.js';

declare global {
    export interface GjsGiImports {
        MyPaintGegl: typeof MyPaintGegl;
    }
}

export default GjsGiImports;


