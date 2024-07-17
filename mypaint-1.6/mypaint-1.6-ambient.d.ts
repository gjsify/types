
declare module 'gi://MyPaint?version=1.6' {
    const MyPaint16: typeof import('./mypaint-1.6.js').default
    export default MyPaint16;
}

declare module 'gi://MyPaint' {
    const MyPaint16: typeof import('./mypaint-1.6.js').default
    export default MyPaint16;
}


