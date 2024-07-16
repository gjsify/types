
declare module 'gi://JSCore?version=3.0' {
    import JSCore from './jscore-3.0.d.ts';
    export default JSCore;
}

declare module 'gi://JSCore' {
    import JSCore30 from 'gi://JSCore?version=3.0';
    export default JSCore30;
}


