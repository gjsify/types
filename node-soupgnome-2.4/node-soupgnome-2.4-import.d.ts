
import SoupGNOME24 from '@girs/soupgnome-2.4';

declare global {
    interface NodeGtkGi {
        require(ns: 'SoupGNOME', ver?: '2.4'): typeof SoupGNOME24;
    }
}

export default NodeGtkGi;

