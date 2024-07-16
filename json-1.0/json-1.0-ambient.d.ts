
declare module 'gi://Json?version=1.0' {
    import Json from './json-1.0.d.ts';
    export default Json;
}

declare module 'gi://Json' {
    import Json10 from 'gi://Json?version=1.0';
    export default Json10;
}


