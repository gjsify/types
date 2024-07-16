
declare module 'gi://GoVirt?version=1.0' {
    import GoVirt from './govirt-1.0.d.ts';
    export default GoVirt;
}

declare module 'gi://GoVirt' {
    import GoVirt10 from 'gi://GoVirt?version=1.0';
    export default GoVirt10;
}


