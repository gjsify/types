
declare module 'gi://MPID?version=3.0' {
    import MPID from './mpid-3.0.d.ts';
    export default MPID;
}

declare module 'gi://MPID' {
    import MPID30 from 'gi://MPID?version=3.0';
    export default MPID30;
}


