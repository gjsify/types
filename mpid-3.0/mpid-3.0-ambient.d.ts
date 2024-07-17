
declare module 'gi://MPID?version=3.0' {
    import MPID30 from '@girs/mpid-3.0';
    export default MPID30;
}

declare module 'gi://MPID' {
    import MPID30 from 'gi://MPID?version=3.0';
    export default MPID30;
}


