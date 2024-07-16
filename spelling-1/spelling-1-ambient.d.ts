
declare module 'gi://Spelling?version=1' {
    import Spelling from './spelling-1.d.ts';
    export default Spelling;
}

declare module 'gi://Spelling' {
    import Spelling1 from 'gi://Spelling?version=1';
    export default Spelling1;
}


