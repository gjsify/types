
declare module 'gi://Shell?version=13' {
    import Shell from '@girs/shell-13';
    export default Shell;
}

declare module 'gi://Shell' {
    import Shell13 from 'gi://Shell?version=13';
    export default Shell13;
}


