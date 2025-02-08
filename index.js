const NodeMediaServer = require("node-media-server");

const httpConfig = {
  port: 8080,
  allow_origin: "*",
  mediaroot: "./media",
};

const rtmpConfig = {
  port: 1935,
  chunk_size: 60000,
  gop_cache: true,
  ping: 30,
  ping_timeout: 60,
};

const config = {
  http: httpConfig,
  rtmp: rtmpConfig,
};

const nms = new NodeMediaServer(config);

// Use run method to start our media server.
nms.run();