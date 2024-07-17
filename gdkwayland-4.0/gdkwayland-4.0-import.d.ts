
import GdkWayland from './gdkwayland-4.0.js';

declare global {
    export interface GjsGiImports {
        GdkWayland: typeof GdkWayland;
    }
}

export default GjsGiImports;


