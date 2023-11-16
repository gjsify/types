
import Unity60 from '@girs/unity-6.0';

declare global {
    export interface GjsGiImports {
        Unity: typeof Unity60;
    }
}

export default GjsGiImports;


