
import CloudProviders03 from '@girs/cloudproviders-0.3';

declare global {
    interface NodeGtkGi {
        require(ns: 'CloudProviders', ver?: '0.3'): typeof CloudProviders03;
    }
}

export default NodeGtkGi;

