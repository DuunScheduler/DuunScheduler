#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("@aws-cdk/core");
import { InfrastructureStack } from "../lib/infrastructure-stack";

async function main() {
  const app = new cdk.App();
  new InfrastructureStack(app, "DuunSchedulerInfrastructure");
}

main();
