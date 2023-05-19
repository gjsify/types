
import SocialWebClient025 from '@girs/socialwebclient-0.25';

declare global {
    interface NodeGtkGi {
        require(ns: 'SocialWebClient', ver?: '0.25'): typeof SocialWebClient025;
    }
}

export default NodeGtkGi;

