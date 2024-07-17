
import DBusGLib from './dbusglib-1.0.js';

declare global {
    export interface GjsGiImports {
        DBusGLib: typeof DBusGLib;
    }
}

export default GjsGiImports;


