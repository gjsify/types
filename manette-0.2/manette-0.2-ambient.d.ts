declare module 'gi://Manette?version=0.2' {
    import Manette02 from '@girs/manette-0.2';
    export default Manette02;
}

declare module 'gi://Manette' {
    import Manette02 from 'gi://Manette?version=0.2';
    export default Manette02;
}
