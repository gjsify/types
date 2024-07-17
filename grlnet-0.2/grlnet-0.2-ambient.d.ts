
declare module 'gi://GrlNet?version=0.2' {
    import GrlNet02 from '@girs/grlnet-0.2';
    export default GrlNet02;
}

declare module 'gi://GrlNet' {
    import GrlNet02 from 'gi://GrlNet?version=0.2';
    export default GrlNet02;
}


