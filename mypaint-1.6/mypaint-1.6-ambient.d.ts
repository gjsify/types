
declare module 'gi://MyPaint?version=1.6' {
    import MyPaint from './mypaint-1.6.d.ts';
    export default MyPaint;
}

declare module 'gi://MyPaint' {
    import MyPaint16 from 'gi://MyPaint?version=1.6';
    export default MyPaint16;
}


