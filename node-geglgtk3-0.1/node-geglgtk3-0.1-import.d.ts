
import GeglGtk301 from '@girs/geglgtk3-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'GeglGtk3', ver?: '0.1'): typeof GeglGtk301;
    }
}

export default NodeGtkGi;

