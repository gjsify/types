
import Rest from './rest-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Rest: typeof Rest;
    }
}

export default GjsGiImports;


