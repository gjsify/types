declare module 'gi://XApp?version=1.0' {
    import XApp10 from '@girs/xapp-1.0';
    export default XApp10;
}

declare module 'gi://XApp' {
    import XApp10 from 'gi://XApp?version=1.0';
    export default XApp10;
}
