
declare module 'gi://Bamf?version=3' {
    import Bamf from './bamf-3.d.ts';
    export default Bamf;
}

declare module 'gi://Bamf' {
    import Bamf3 from 'gi://Bamf?version=3';
    export default Bamf3;
}


