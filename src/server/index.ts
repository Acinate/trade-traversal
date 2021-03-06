import express, {Request, Response} from "express";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import {ENVIRONMENT, PORT} from "../util/secrets";
// Import API Routes
import * as home from "./controllers/home";

// Create express server
const app = express();

// Add middleware
app.use(helmet());
app.use(morgan("combined"));

// Define API routes
app.get('/api/', home.get);

// Configure environment settings
if (ENVIRONMENT === 'development') {
    // Configure Webpack Dev Server (with React Hot-Reload)
    const webpackConfig = require("../../webpack.dev.js");
    const compiler = webpack(webpackConfig);
    const history = require("connect-history-api-fallback");
    app.use(history());
    app.use(
      webpackDevMiddleware(compiler, {
          publicPath: "/",
          stats: "errors-warnings"
      })
    );
    app.use(webpackHotMiddleware(compiler));
} else {
    // Configure Static Files (Production)
    app.use(express.static(__dirname));

    // Serve React Static Files (Production)
    app.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, "/index.html"));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT}/ in ${ENVIRONMENT} mode.`);
});

export default app;
module.exports = app;