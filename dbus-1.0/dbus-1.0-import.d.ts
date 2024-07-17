
import DBus from './dbus-1.0.js';

declare global {
    export interface GjsGiImports {
        DBus: typeof DBus;
    }
}

export default GjsGiImports;


