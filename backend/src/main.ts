import { Application } from "jsr:@oak/oak/application";
import router from "./routes.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
