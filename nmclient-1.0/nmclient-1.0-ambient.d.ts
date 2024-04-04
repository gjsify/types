
declare module 'gi://NMClient?version=1.0' {
    import NMClient from '@girs/nmclient-1.0';
    export default NMClient;
}

declare module 'gi://NMClient' {
    import NMClient10 from 'gi://NMClient?version=1.0';
    export default NMClient10;
}


