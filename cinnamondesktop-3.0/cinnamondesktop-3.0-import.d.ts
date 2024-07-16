
import CinnamonDesktop from './cinnamondesktop-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        CinnamonDesktop: typeof CinnamonDesktop;
    }
}

export default GjsGiImports;


