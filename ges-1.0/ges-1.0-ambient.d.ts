declare module 'gi://GES?version=1.0' {
    import GES10 from '@girs/ges-1.0';
    export default GES10;
}

declare module 'gi://GES' {
    import GES10 from 'gi://GES?version=1.0';
    export default GES10;
}
