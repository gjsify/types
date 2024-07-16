
declare module 'gi://JavaScriptCore?version=4.0' {
    import JavaScriptCore from './javascriptcore-4.0.d.ts';
    export default JavaScriptCore;
}

declare module 'gi://JavaScriptCore' {
    import JavaScriptCore40 from 'gi://JavaScriptCore?version=4.0';
    export default JavaScriptCore40;
}


