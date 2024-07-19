declare module 'gi://Gdm?version=1.0' {
    import Gdm10 from '@girs/gdm-1.0';
    export default Gdm10;
}

declare module 'gi://Gdm' {
    import Gdm10 from 'gi://Gdm?version=1.0';
    export default Gdm10;
}
