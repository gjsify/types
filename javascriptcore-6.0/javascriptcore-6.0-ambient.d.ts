
declare module 'gi://JavaScriptCore?version=6.0' {
    import JavaScriptCore from './javascriptcore-6.0.d.ts';
    export default JavaScriptCore;
}

declare module 'gi://JavaScriptCore' {
    import JavaScriptCore60 from 'gi://JavaScriptCore?version=6.0';
    export default JavaScriptCore60;
}


