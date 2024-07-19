declare module 'gi://Folks?version=0.7' {
    import Folks07 from '@girs/folks-0.7';
    export default Folks07;
}

declare module 'gi://Folks' {
    import Folks07 from 'gi://Folks?version=0.7';
    export default Folks07;
}
