
declare module 'gi://Gtef?version=2' {
    import Gtef from './gtef-2.d.ts';
    export default Gtef;
}

declare module 'gi://Gtef' {
    import Gtef2 from 'gi://Gtef?version=2';
    export default Gtef2;
}


