import Ide47 from '@girs/ide-47';

declare global {
    export interface GjsGiImports {
        Ide: typeof Ide47;
    }
}

export default GjsGiImports;
