
declare module 'gi://Gitg?version=1.0' {
    import Gitg from './gitg-1.0.d.ts';
    export default Gitg;
}

declare module 'gi://Gitg' {
    import Gitg10 from 'gi://Gitg?version=1.0';
    export default Gitg10;
}


