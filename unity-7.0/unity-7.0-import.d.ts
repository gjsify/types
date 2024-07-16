
import Unity from './unity-7.0.d.ts';

declare global {
    export interface GjsGiImports {
        Unity: typeof Unity;
    }
}

export default GjsGiImports;


