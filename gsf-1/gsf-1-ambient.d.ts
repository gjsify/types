declare module 'gi://Gsf?version=1' {
    import Gsf1 from '@girs/gsf-1';
    export default Gsf1;
}

declare module 'gi://Gsf' {
    import Gsf1 from 'gi://Gsf?version=1';
    export default Gsf1;
}
