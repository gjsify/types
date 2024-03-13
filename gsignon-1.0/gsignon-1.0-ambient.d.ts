
declare module 'gi://gSignon?version=1.0' {
    import GSignon10 from '@girs/gsignon-1.0';
    export default GSignon10;
}

declare module 'gi://gSignon' {
    export * from 'gi://gSignon?version=1.0';
}


