
declare module 'gi://UMockdev?version=1.0' {
    import UMockdev from './umockdev-1.0.d.ts';
    export default UMockdev;
}

declare module 'gi://UMockdev' {
    import UMockdev10 from 'gi://UMockdev?version=1.0';
    export default UMockdev10;
}


