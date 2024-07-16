
import ECalendar from './ecalendar-1.2.d.ts';

declare global {
    export interface GjsGiImports {
        ECalendar: typeof ECalendar;
    }
}

export default GjsGiImports;


