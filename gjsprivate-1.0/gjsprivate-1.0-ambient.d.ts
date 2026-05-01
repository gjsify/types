
declare module 'gi://GjsPrivate?version=1.0' {
    import GjsPrivate10 from '@girs/gjsprivate-1.0';
    export default GjsPrivate10;
}

declare module 'gi://GjsPrivate' {
    import GjsPrivate10 from 'gi://GjsPrivate?version=1.0';
    export default GjsPrivate10;
}


