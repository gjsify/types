declare module 'gi://Ide?version=50' {
    import Ide50 from '@girs/ide-50';
    export default Ide50;
}

declare module 'gi://Ide' {
    import Ide50 from 'gi://Ide?version=50';
    export default Ide50;
}
