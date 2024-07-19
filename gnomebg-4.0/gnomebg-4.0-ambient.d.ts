declare module 'gi://GnomeBG?version=4.0' {
    import GnomeBG40 from '@girs/gnomebg-4.0';
    export default GnomeBG40;
}

declare module 'gi://GnomeBG' {
    import GnomeBG40 from 'gi://GnomeBG?version=4.0';
    export default GnomeBG40;
}
