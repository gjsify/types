declare module 'gi://RygelServer?version=2.6' {
    import RygelServer26 from '@girs/rygelserver-2.6';
    export default RygelServer26;
}

declare module 'gi://RygelServer' {
    import RygelServer26 from 'gi://RygelServer?version=2.6';
    export default RygelServer26;
}
