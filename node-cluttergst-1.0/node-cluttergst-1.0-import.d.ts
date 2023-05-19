
import ClutterGst10 from '@girs/cluttergst-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ClutterGst', ver?: '1.0'): typeof ClutterGst10;
    }
}

export default NodeGtkGi;

