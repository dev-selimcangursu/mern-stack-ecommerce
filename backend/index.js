
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ProductRoutes = require('./Routes/Product')
dotenv.config();
const cors = require("cors");

const app = express();


const mongoUri = process.env.MONGO_URI;

// Mongoose bağlantısı
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB bağlantısı başarılı!'))
.catch((err) => console.error('MongoDB bağlantı hatası:', err));

app.use(cors());
app.use(express.json());
app.use('/product',ProductRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
