const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/predict', async (req, res) => {
  try {
    const r = await fetch('https://api-rikvippro-7.onrender.com/api/md5');
    const j = await r.json();
    res.json(j);
  } catch (e) {
    res.status(500).json({ error: 'API lỗi' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server chạy cổng ' + PORT));