import { InfrastructureStack } from "../src/infrastructure-stack";
import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import cdk = require("@aws-cdk/core");

const props = {};

const app = new cdk.App();
const basicStack = new InfrastructureStack(app, "TestStack", props);

test("Distribution created", () => {
  expectCDK(basicStack).to(haveResource("AWS::CloudFront::Distribution"));
});
