import * as dotenv from 'dotenv';
import ExpressRotuer from './router';
import express = require('express');

dotenv.config();

const app = express();
const expressRoutes = new ExpressRotuer(app);
expressRoutes.init();

app.listen(3000, () => {
  console.log(`Express server app listening on port 3000!`);
});
