
import ECalendar12 from '@girs/ecalendar-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'ECalendar', ver?: '1.2'): typeof ECalendar12;
    }
}

export default NodeGtkGi;

