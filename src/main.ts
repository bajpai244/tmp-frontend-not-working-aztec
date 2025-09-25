import {createPXEClient} from "@aztec/aztec.js"

const main  = async () => {

  const client = createPXEClient("http://localhost:8545");

  console.log ("Client created:", client);

  const nodeInfo = await client.getNodeInfo();
  console.log ("Node info:", nodeInfo);
}

main()