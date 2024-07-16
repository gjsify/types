
import AvahiCore from './avahicore-0.6.d.ts';

declare global {
    export interface GjsGiImports {
        AvahiCore: typeof AvahiCore;
    }
}

export default GjsGiImports;


