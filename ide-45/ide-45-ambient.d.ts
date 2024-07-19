declare module 'gi://Ide?version=45' {
    import Ide45 from '@girs/ide-45';
    export default Ide45;
}

declare module 'gi://Ide' {
    import Ide45 from 'gi://Ide?version=45';
    export default Ide45;
}
