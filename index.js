import 'dotenv/config';
import app from "./src/app.js";

app.listen(8080, () => {
  console.log(`🚀 ~ 8080:`, 8080);
});