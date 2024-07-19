import DBusGLib10 from '@girs/dbusglib-1.0';

declare global {
    export interface GjsGiImports {
        DBusGLib: typeof DBusGLib10;
    }
}

export default GjsGiImports;
