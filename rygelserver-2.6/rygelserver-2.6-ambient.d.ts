
declare module 'gi://RygelServer?version=2.6' {
    import RygelServer from './rygelserver-2.6.d.ts';
    export default RygelServer;
}

declare module 'gi://RygelServer' {
    import RygelServer26 from 'gi://RygelServer?version=2.6';
    export default RygelServer26;
}


