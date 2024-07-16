
declare module 'gi://JavaScriptCore?version=5.0' {
    import JavaScriptCore from './javascriptcore-5.0.d.ts';
    export default JavaScriptCore;
}

declare module 'gi://JavaScriptCore' {
    import JavaScriptCore50 from 'gi://JavaScriptCore?version=5.0';
    export default JavaScriptCore50;
}


