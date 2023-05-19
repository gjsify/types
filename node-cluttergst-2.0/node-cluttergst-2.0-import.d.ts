
import ClutterGst20 from '@girs/cluttergst-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ClutterGst', ver?: '2.0'): typeof ClutterGst20;
    }
}

export default NodeGtkGi;

