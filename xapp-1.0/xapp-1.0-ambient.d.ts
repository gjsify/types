
declare module 'gi://XApp?version=1.0' {
    import XApp from './xapp-1.0.d.ts';
    export default XApp;
}

declare module 'gi://XApp' {
    import XApp10 from 'gi://XApp?version=1.0';
    export default XApp10;
}


