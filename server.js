const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // پورت مورد نظر شما

// مسیر فایل‌های استاتیک
app.use(express.static(path.join(__dirname, 'public')));

// ارسال index.html برای تمام درخواست‌ها
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
