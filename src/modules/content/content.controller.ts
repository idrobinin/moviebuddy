import { Router } from "express";

const router = Router();

router.get("/", (_, response) => {
  response.sendFile("src/views/index.html", {
    root: ".",
  });
});
export default router;
