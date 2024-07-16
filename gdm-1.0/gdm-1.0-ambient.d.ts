
declare module 'gi://Gdm?version=1.0' {
    import Gdm from './gdm-1.0.d.ts';
    export default Gdm;
}

declare module 'gi://Gdm' {
    import Gdm10 from 'gi://Gdm?version=1.0';
    export default Gdm10;
}


