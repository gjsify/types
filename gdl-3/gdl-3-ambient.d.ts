
declare module 'gi://Gdl?version=3' {
    import Gdl from './gdl-3.d.ts';
    export default Gdl;
}

declare module 'gi://Gdl' {
    import Gdl3 from 'gi://Gdl?version=3';
    export default Gdl3;
}


