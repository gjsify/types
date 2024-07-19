import DBus10 from '@girs/dbus-1.0';

declare global {
    export interface GjsGiImports {
        DBus: typeof DBus10;
    }
}

export default GjsGiImports;
