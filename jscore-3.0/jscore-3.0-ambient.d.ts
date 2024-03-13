
declare module 'gi://JSCore?version=3.0' {
    import JSCore30 from '@girs/jscore-3.0';
    export default JSCore30;
}

declare module 'gi://JSCore' {
    export * from 'gi://JSCore?version=3.0';
}


