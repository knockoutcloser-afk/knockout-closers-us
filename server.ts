import "./error-capture";
import { consumeLastCapturedError } from "./error-capture";
import { renderErrorPage } from "./error-page";

export default {
  fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> | Response {
    let serverEntryPromise: Promise<ServerEntry> | undefined;

    async function getServerEntry(): Promise<ServerEntry> {
      if (!serverEntryPromise) {
        serverEntryPromise = import("@tanstack/react-start/server-entry").then(
          (m) => (m.default ?? m) as ServerEntry,
        );
      }
      return serverEntryPromise;
    }

    return getServerEntry().then((serverEntry) => serverEntry.fetch(request, env, ctx));
  }
};
