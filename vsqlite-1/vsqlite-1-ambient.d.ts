
declare module 'gi://Vsqlite?version=1' {
    import Vsqlite from './vsqlite-1.d.ts';
    export default Vsqlite;
}

declare module 'gi://Vsqlite' {
    import Vsqlite1 from 'gi://Vsqlite?version=1';
    export default Vsqlite1;
}


