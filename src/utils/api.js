var axios = require("axios");
var qs = require("qs");
var data = qs.stringify({
  grant_type: "client_credentials",
});

var config = {
  method: "post",
  url: "https://api.sandbox.paypal.com/v1/oauth2/token",
  headers: {
    Authorization:
      "Basic QVZFU0dOVDUtZlFHZTkxeHVIa25KbEhqZHFscWd2dlEtaVlodTZFLWo1UERIUERsdjVOVmV6UEhpbk9UeGk0dW1BcTMxRFRrbHdQcHRSUXE6RUpWMjVhMXRCeFFjTkRLMUFEMDNaNkEtbDRMSloxaTlIbjN3b2ZFMko5QlJ4a2NBSU5xY2p5N3Y3WVpnUDFRZDVBWm9jcE5rZGI3UG9yaFE=",
  },
  data: data,
};

export const getAuthToken = () => {
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
