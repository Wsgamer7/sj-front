import {
  Configuration,
  ErrorContext,
  FetchParams,
  Middleware,
  RequestContext,
  ResponseContext,
} from "@/api";

function createMiddleware(
  pre?: (context: RequestContext) => Promise<FetchParams | void>,
  post?: (context: ResponseContext) => Promise<Response | void>,
  onError?: (context: ErrorContext) => Promise<Response | void>
) {
  return { pre, post, onError } as Middleware;
}

const apiDomain = "http://192.168.1.103:8000";
// const apiDomain = "http://localhost:8000";

export async function clientMiddlewarePre(
  context: RequestContext
): Promise<FetchParams | void> {
  // debugger;
  const tk = localStorage.getItem("tk");
  if (tk) {
    (context.init.headers as Record<string, string>)["Authorization"] = tk;
  }

  return Promise.resolve({
    url: context.url,
    init: context.init,
  });
}

//client config
const clientMiddleware = createMiddleware(
  clientMiddlewarePre,
  undefined,
  (context: ErrorContext) => {
    throw new Error(`An error occurred: ${context.error}`);
  }
);

const apiClient = new Configuration({
  basePath: apiDomain,
  headers: {
    "Content-Type": "application/json",
  },
  middleware: [clientMiddleware],
});

export default apiClient;
