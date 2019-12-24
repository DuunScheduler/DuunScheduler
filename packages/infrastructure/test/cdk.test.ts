import { InfrastructureStack } from "../src/infrastructure-stack";
import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle
} from "@aws-cdk/assert";
import cdk = require("@aws-cdk/core");

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new InfrastructureStack(app, "MyTestStack");
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {}
      },
      MatchStyle.EXACT
    )
  );
});
