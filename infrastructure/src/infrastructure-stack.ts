import cdk = require("@aws-cdk/core");
//import path = require("path");
import { StaticSite } from "@justin8-cdk/static-site";

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Function from a folder containing the code
    // new lambda.Function(this, "frontend", {
    //   handler: "index.handler",
    //   runtime: lambda.Runtime.NODEJS_12_X,
    //   code: lambda.Code.fromAsset(path.join(__dirname, "..", "lambda-handler"))
    // });

    // Function from a zip file of the lambda
    // Obtained by running: (cd lambda-handler; zip ../lambda-handler.zip index.js)
    // new lambda.Function(this, "frontend", {
    //   handler: "index.handler",
    //   runtime: lambda.Runtime.NODEJS_12_X,
    //   code: lambda.Code.fromAsset(
    //     path.join(__dirname, "..", "lambda-handler.zip")
    //   )
    // });

    new StaticSite(this, "frontendStaticSite", {
      source: { path: "../frontend/dist" }
    });
  }
}
