import Panel1 from '@girs/panel-1';

declare global {
    export interface GjsGiImports {
        Panel: typeof Panel1;
    }
}

export default GjsGiImports;
