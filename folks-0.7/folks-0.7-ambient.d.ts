
declare module 'gi://Folks?version=0.7' {
    import Folks from './folks-0.7.d.ts';
    export default Folks;
}

declare module 'gi://Folks' {
    import Folks07 from 'gi://Folks?version=0.7';
    export default Folks07;
}


