declare module 'gi://Vsqlite?version=1' {
    import Vsqlite1 from '@girs/vsqlite-1';
    export default Vsqlite1;
}

declare module 'gi://Vsqlite' {
    import Vsqlite1 from 'gi://Vsqlite?version=1';
    export default Vsqlite1;
}
