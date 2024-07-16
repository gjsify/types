
declare module 'gi://Accounts?version=1.0' {
    import Accounts from './accounts-1.0.d.ts';
    export default Accounts;
}

declare module 'gi://Accounts' {
    import Accounts10 from 'gi://Accounts?version=1.0';
    export default Accounts10;
}


