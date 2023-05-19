
import RygelRendererGst28 from '@girs/rygelrenderergst-2.8';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelRendererGst', ver?: '2.8'): typeof RygelRendererGst28;
    }
}

export default NodeGtkGi;

