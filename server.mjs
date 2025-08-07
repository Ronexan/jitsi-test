import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import cors from "cors"

const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

app.use(cors())

app.get("/info", (req, res) => {
  return res.json("Express server")
})

app.listen(80, () => console.log("Listening at 8080"));