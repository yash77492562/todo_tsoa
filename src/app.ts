import express,{json,urlencoded} from "express"
import {RegisterRoutes} from '../build/routes'
import swaggerUi from 'swagger-ui-express'
import {Response as ExResponse,Request as ExRequest} from "express"

export const app = express();

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse): Promise<void> => {
    try {
        const swaggerDocument = await import("../build/swagger.json");
        res.send(swaggerUi.generateHTML(swaggerDocument));
    } catch (error) {
        console.error("Error loading Swagger documentation:", error);
        res.status(500).send("Error loading documentation");
    }
});

// Use body parser to read sent json payloads
app.use(
    urlencoded({
        extended:true,
    })
);
app.use(json())
RegisterRoutes(app)





// npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch
// in order to create a client 