import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/myself') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Name</h1><br><p>PKP</p>")
        res.write("coming soon")
        res.end()
    }

    else if (req.url === '/resume') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write("my name is Pavan\n")
        res.write("<head><style> body {font-family: Arial, sans-serif;margin: 0;padding: 0;background-color: cornsilk;color: #333;}h1, h2, h3 {color: #2c3e50;}h1 {text-align: center;margin-top: 20px;}.resume {width: 60%;margin: 20px auto;background-color: #fff;padding: 20px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}.section {margin-bottom: 20px;}.section h2 {border-bottom: 2px solid #2c3e50;padding-bottom: 5px;}.section p, .section ul {margin: 10px 0;}.section ul {list-style-type: disc;padding-left: 20px;}.section ul li {margin: 5px 0;} p{padding-left:90px;} ul{padding-left:100px} h2,h3{padding-left:120px;}</style></head><body><div><h1>PKP Resume</h1><div><h2>Personal Information</h2><p>Name :PKP </p><p>Address :Anakapalle </p><p>Phone : 8886861175 </p><p>Email :sivagovindharao@gmail.com </p></div><div><h2>Education</h2><!-- Use below to place information--><p>Degree :B-tech </p><p>School :Bhashyam </p></div><div><h2>Languages </h2><!-- Use below to place information--><ul><li>Telugu</li><li>English</li></ul></div><div><h2>Work Experience</h2><p>wite here ra</p><div><h3>Job 1</h3><ul><li>edoti</li><li>edoti2</li></ul></div></div></div></body></html>")
        res.end()
    }

    else if (req.url === '/job') {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Job ledh bro</h1>");
      res.end()
  }


  else if (req.url === '/edu') {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html");
    res.write("Studied at Bhashyam , AKP <br>")
    res.write("Studied at Aakash , Gajuwaka<br>")
    res.write("Studying at SRKR")
    res.end()
}


    else {
        res.statusCode = 400
        res.end("Page Not Found\n")
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
