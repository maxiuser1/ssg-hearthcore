import { CultureOptions } from "@umbraco/headless-client";
import Client from "./umbraco-client";

export async function getPageWithUrl(url: string) {
  //   return root;

  //  const culture: CultureOptions = { culture: "en-US" };
  // const root = await Client.delivery.content.root({ culture: "en-US" });
  // console.log("rrot", root);

  let page = await Client.delivery.content.byUrl(url, {
    depth: 1,
    hyperlinks: false,
  });
  console.log("page", page);
  return page;
}
