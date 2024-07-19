import CinnamonDesktop30 from '@girs/cinnamondesktop-3.0';

declare global {
    export interface GjsGiImports {
        CinnamonDesktop: typeof CinnamonDesktop30;
    }
}

export default GjsGiImports;
