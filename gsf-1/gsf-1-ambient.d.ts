
declare module 'gi://Gsf?version=1' {
    import Gsf from './gsf-1.d.ts';
    export default Gsf;
}

declare module 'gi://Gsf' {
    import Gsf1 from 'gi://Gsf?version=1';
    export default Gsf1;
}


