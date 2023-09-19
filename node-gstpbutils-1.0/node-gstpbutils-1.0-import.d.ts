
import GstPbutils10 from '@girs/node-gstpbutils-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstPbutils', ver?: '1.0'): typeof GstPbutils10;
    }
}

export default NodeGtkGi;

