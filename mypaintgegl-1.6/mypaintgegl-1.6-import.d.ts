import MyPaintGegl16 from '@girs/mypaintgegl-1.6';

declare global {
    export interface GjsGiImports {
        MyPaintGegl: typeof MyPaintGegl16;
    }
}

export default GjsGiImports;
