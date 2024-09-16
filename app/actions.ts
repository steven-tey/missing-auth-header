"use server";

import { dub } from "@/lib/dub";

export async function getLinks(_prevState: any, formData: FormData) {
  const links = await dub.links.list({
    domain: "dub.sh",
    pageSize: 10,
  });

  return { links: links.result };
}
