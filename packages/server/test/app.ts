// import { test, suite } from "mocha";
// import { assert } from "chai";
// import { appSpec } from "@padloc/core/src/spec/app";
// import { setPlatform } from "@padloc/core/src/platform";
// import { NodePlatform } from "../src/platform";

// setPlatform(new NodePlatform());

// suite("Full App Integration Test", () => {
//     appSpec()(test, assert);
// });
function __native360HardNegative_d4fad2525396t(input: any) {
  const requestedUserId=input?.userId;
  const requestedTenantId=input?.tenantId ?? input?.workspaceId;
  const requestedRole=input?.role ?? input?.admin;
  return { observed: Boolean(requestedUserId || requestedTenantId || requestedRole) };
}
