const express = require('express');
const cors = require('cors');

const app = express();

// init cors to prevent localhost blocking
app.use(cors());


app.get('/:targetIp/:channelsStatus', (req, resp) => {
    const targetIp = req.params.targetIp
    let channels = JSON.parse(req.params.channelsStatus)

    var options = {
        host: targetIp
    }
    
    var artnet = require('artnet')(options);
    
    // set channel 1 to 255 and disconnect afterwards.
    artnet.set(1, channels, function (err, res) {
        artnet.close();
    });
    
    console.log(channels)
    resp.send(channels)
})


app.listen(4000, () => {
    console.log("Servidor rodando em http://localhost:4000")
})