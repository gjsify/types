
import ICal30 from '@girs/ical-3.0';


declare global {
    export interface GjsGiImports {
        ICal: typeof ICal30;
    }
}

export default GjsGiImports;


