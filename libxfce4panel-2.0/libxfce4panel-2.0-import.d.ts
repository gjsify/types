import Libxfce4panel20 from '@girs/libxfce4panel-2.0';

declare global {
    export interface GjsGiImports {
        Libxfce4panel: typeof Libxfce4panel20;
    }
}

export default GjsGiImports;
