
import Avahi06 from '@girs/avahi-0.6';

declare global {
    export interface GjsGiImports {
        Avahi: typeof Avahi06;
    }
}

export default GjsGiImports;


