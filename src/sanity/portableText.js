import { toHTML } from "@portabletext/to-html";
import { urlFromImage } from "./urlFromImage";

const customComponents = {
  /* your custom components here */
  types: {
    image: ({ value }) =>
      `<img src="${urlFromImage(value).url()}" style="max-width:100%;" />`,
    embedIframe: ({ value }) => `${value.embedCode}`,
  },
};

export function sanityPortableText(portabletext) {
  return toHTML(portabletext, { components: customComponents });
}
