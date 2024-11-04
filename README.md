# import modules
    npm install
    
# building the routes.ts file
    npm run tsoa route

# compile typeScript file 
    npm run tsc

# run the server
    node build/src/server.js

# In order to generate a client 
    npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch
