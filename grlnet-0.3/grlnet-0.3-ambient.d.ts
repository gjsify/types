declare module 'gi://GrlNet?version=0.3' {
    import GrlNet03 from '@girs/grlnet-0.3';
    export default GrlNet03;
}

declare module 'gi://GrlNet' {
    import GrlNet03 from 'gi://GrlNet?version=0.3';
    export default GrlNet03;
}
