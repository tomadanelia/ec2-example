
import express,{ Request , Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

let latestData = '';

app.use(cors());
app.use(express.json());

app.post('/api/assignments',(req:Request,res:Response)=>{
  const {data} = req.body;
  if (typeof data !== 'string') {
    res.status(400).json({ error: 'Invalid request body format.server Expected a string.' });
    return;
  }
latestData = data;
res.json({message:"data received"})
});


app.get('/api/get-answer', (req, res) => {
  res.json({ data: latestData });
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});