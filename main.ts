/// <reference types="akamai-edgeworkers"/>

import { createResponse } from "create-response";

// import the necessary bits of Spec.
import {
  SpecConfiguration,
  specProxyProcess,
} from "@specprotected/spec-proxy-akamai-worker";

const config: SpecConfiguration = {
  inlineMode: false,
};

export async function responseProvider(
  originalRequest: EW.ResponseProviderRequest
): Promise<object> {
  // Allow Spec to do any required processing of the request and response
  let response = await specProxyProcess(originalRequest, config);
  // Build a response to return to the user
  return createResponse(response.body, response);
}
