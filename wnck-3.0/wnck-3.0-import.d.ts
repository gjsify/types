import Wnck30 from '@girs/wnck-3.0';

declare global {
    export interface GjsGiImports {
        Wnck: typeof Wnck30;
    }
}

export default GjsGiImports;
