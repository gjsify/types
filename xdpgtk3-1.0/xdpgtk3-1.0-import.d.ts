import XdpGtk310 from '@girs/xdpgtk3-1.0';

declare global {
    export interface GjsGiImports {
        XdpGtk3: typeof XdpGtk310;
    }
}

export default GjsGiImports;
