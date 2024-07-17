
declare module 'gi://MyPaint?version=1.6' {
    import MyPaint16 from '@girs/mypaint-1.6';
    export default MyPaint16;
}

declare module 'gi://MyPaint' {
    import MyPaint16 from 'gi://MyPaint?version=1.6';
    export default MyPaint16;
}


