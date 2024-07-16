
import Nice from './nice-0.1.d.ts';

declare global {
    export interface GjsGiImports {
        Nice: typeof Nice;
    }
}

export default GjsGiImports;


