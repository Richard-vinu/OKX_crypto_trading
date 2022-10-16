import axios from "axios";

let public_trades = async (req, res) => {
  try {
    var config = {
      method: "get",
      url: "https://www.okex.com/api/v5/rfq/public-trades",
      headers: {},
    };

    let result = await axios(config);

    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};






export { public_trades };
