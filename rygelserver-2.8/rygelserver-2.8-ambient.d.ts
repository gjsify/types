
declare module 'gi://RygelServer?version=2.8' {
    import RygelServer from './rygelserver-2.8.d.ts';
    export default RygelServer;
}

declare module 'gi://RygelServer' {
    import RygelServer28 from 'gi://RygelServer?version=2.8';
    export default RygelServer28;
}


