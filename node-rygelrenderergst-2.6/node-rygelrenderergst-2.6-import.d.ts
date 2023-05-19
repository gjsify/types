
import RygelRendererGst26 from '@girs/rygelrenderergst-2.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelRendererGst', ver?: '2.6'): typeof RygelRendererGst26;
    }
}

export default NodeGtkGi;

