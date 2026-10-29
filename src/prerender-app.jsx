import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { routes } from "./routes.jsx";

const handler = createStaticHandler(routes);

export async function renderPath(path) {
  const request = new Request(`https://nationalengineeringworks.in${path}`);
  const context = await handler.query(request);
  if (context instanceof Response) {
    throw new Error(`Could not prerender ${path}: ${context.status}`);
  }

  const router = createStaticRouter(handler.dataRoutes, context);
  return (
    <StaticRouterProvider
      router={router}
      context={context}
      hydrate={false}
    />
  );
}
