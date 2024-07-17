
declare module 'gi://RygelServer?version=2.8' {
    import RygelServer28 from '@girs/rygelserver-2.8';
    export default RygelServer28;
}

declare module 'gi://RygelServer' {
    import RygelServer28 from 'gi://RygelServer?version=2.8';
    export default RygelServer28;
}


