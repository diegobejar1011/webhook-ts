import express from "express";
import { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true
    })
});

app.listen(3000, () => console.log('Server running at 3000'));