import Libxfce4ui20 from '@girs/libxfce4ui-2.0';

declare global {
    export interface GjsGiImports {
        Libxfce4ui: typeof Libxfce4ui20;
    }
}

export default GjsGiImports;
