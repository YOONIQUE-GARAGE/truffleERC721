import { NFTStorage, File } from "nft.storage";
import fs from "fs";

const apiKey = "Your API KEY";
const client = new NFTStorage({ token: apiKey });

const metadata = await client.store({
  name: "woodang",
  description: "carrot is cute",
  image: new File([fs.readFileSync("./woodang.png")], "woodang.png", {
    type: "image/png ",
  }),
  attributes: [
    { trait_type: "skin", value: "flash" },
    {
      trait_type: "face",
      value: "frightened",
    },
  ],
});
console.log(metadata.url);
