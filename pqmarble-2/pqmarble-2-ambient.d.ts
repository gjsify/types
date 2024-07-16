
declare module 'gi://PQMarble?version=2' {
    import PQMarble from './pqmarble-2.d.ts';
    export default PQMarble;
}

declare module 'gi://PQMarble' {
    import PQMarble2 from 'gi://PQMarble?version=2';
    export default PQMarble2;
}


