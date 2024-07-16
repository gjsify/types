
declare module 'gi://Folks?version=0.6' {
    import Folks from './folks-0.6.d.ts';
    export default Folks;
}

declare module 'gi://Folks' {
    import Folks06 from 'gi://Folks?version=0.6';
    export default Folks06;
}


