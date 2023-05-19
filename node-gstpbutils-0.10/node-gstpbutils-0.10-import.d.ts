
import GstPbutils010 from '@girs/gstpbutils-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstPbutils', ver?: '0.10'): typeof GstPbutils010;
    }
}

export default NodeGtkGi;

