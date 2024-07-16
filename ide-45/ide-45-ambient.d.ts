
declare module 'gi://Ide?version=45' {
    import Ide from './ide-45.d.ts';
    export default Ide;
}

declare module 'gi://Ide' {
    import Ide45 from 'gi://Ide?version=45';
    export default Ide45;
}


