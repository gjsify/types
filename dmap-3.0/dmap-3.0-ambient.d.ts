
declare module 'gi://DMAP?version=3.0' {
    import DMAP from './dmap-3.0.d.ts';
    export default DMAP;
}

declare module 'gi://DMAP' {
    import DMAP30 from 'gi://DMAP?version=3.0';
    export default DMAP30;
}


