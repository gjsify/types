
import GnomeBG40 from '@girs/node-gnomebg-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeBG', ver?: '4.0'): typeof GnomeBG40;
    }
}

export default NodeGtkGi;

