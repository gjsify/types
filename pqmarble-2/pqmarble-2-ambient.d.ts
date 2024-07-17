
declare module 'gi://PQMarble?version=2' {
    import PQMarble2 from '@girs/pqmarble-2';
    export default PQMarble2;
}

declare module 'gi://PQMarble' {
    import PQMarble2 from 'gi://PQMarble?version=2';
    export default PQMarble2;
}


