
import ECalendar12 from '@girs/ecalendar-1.2';

declare global {
    export interface GjsGiImports {
        ECalendar: typeof ECalendar12;
    }
}

export default GjsGiImports;


