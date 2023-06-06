import {getBuildCfg} from "../../src/build/build-cfg";

describe('build', function () {
    it('should get config', async function () {

        expect(await getBuildCfg());

    });
});
