declare module 'gi://Spelling?version=1' {
    import Spelling1 from '@girs/spelling-1';
    export default Spelling1;
}

declare module 'gi://Spelling' {
    import Spelling1 from 'gi://Spelling?version=1';
    export default Spelling1;
}
