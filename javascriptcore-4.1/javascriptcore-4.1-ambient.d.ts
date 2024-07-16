
declare module 'gi://JavaScriptCore?version=4.1' {
    import JavaScriptCore from './javascriptcore-4.1.d.ts';
    export default JavaScriptCore;
}

declare module 'gi://JavaScriptCore' {
    import JavaScriptCore41 from 'gi://JavaScriptCore?version=4.1';
    export default JavaScriptCore41;
}


