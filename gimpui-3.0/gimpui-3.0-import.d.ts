import GimpUi30 from '@girs/gimpui-3.0';

declare global {
    export interface GjsGiImports {
        GimpUi: typeof GimpUi30;
    }
}

export default GjsGiImports;
