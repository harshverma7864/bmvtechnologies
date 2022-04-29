// const connectToMongo = require('./db')
const express = require('express')
const fetch = require("cross-fetch");
const BitlyClient = require('bitly').BitlyClient;
var cors = require('cors')

// connectToMongo();

const app = express()
const port = 5000

app.use(cors())

//middleware for req.body;pp
app.use(express.json())


// -----------------------------

app.post('/api', (req, res) => {
  var result = "";

  const { url1, url2, url3 } = req.body;

  console.log(url1, url2, url3)
  var st1 = url1.split("-");
  var st2 = url2.split("-");
  var st3 = url3.split("-");
  var st = [st1, st2, st3];

  const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjUxMjM0NzA1LCJvcmdhbml6YXRpb25JZCI6MTU5MTc5LCJqdGkiOiIzNWQxNDE5Zi0zN2JmLTQ5ZDEtYTQxMS0wMDlhMjRmZDdlMWYifQ.BKrEUP_C1yYoNeFgN70knPcbyaYcRHMmgj5fEORBP4s";

  for (let index = 0; index < 3; index++) {
    const element = st[index];


    const data = {
      startDate: "2022-05-17T14:" + element[0] + ":00.000Z",
      endDate: "2022-05-18T14:" + element[1] + ":00.000Z",
      fields: ["hostRoomUrl"],
    };

    function getResponse() {
      return fetch("https://api.whereby.dev/v1/meetings", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    // const BIT_KEY = "a5d7ae50ac71328e2957a318a7d8796a556d16ce";


    getResponse().then(async res => {
      console.log("Status code:", res.status);
      const data = await res.json();
      console.log(data);
      // console.log("Room URL:", data.roomUrl);
      // console.log("startdate:", data.startdate);
      console.log("Room URL:", data.roomUrl);
      console.log("Host room URL:", data.hostRoomUrl);


      // Both versions
      const bitly = new BitlyClient('a5d7ae50ac71328e2957a318a7d8796a556d16ce');
      var resu = "";
      var roomurl = data.roomUrl
      async function example(roomurl) {
        const response = await bitly.shorten(roomurl);
        // resu += `${response.link}  `;
        console.log(`Your shortened bitlink is ${response.link}`);
      }
      var hosturl = data.roomUrl
      async function example2(hosturl) {
        const response = await bitly.shorten(hosturl);
        // resu += response.link;
        console.log(`Your shortened bitlink is ${response.link}`);
      }
      result = result + "resu";
      console.log(result)
    });

  }
  res.json(result);s
})



app.listen(port, () => {
  console.log(`OnlineNotesSaver listening at http://localhost:${port}`)
})
