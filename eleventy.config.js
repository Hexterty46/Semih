import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  (eleventyConfig.addPlugin(eleventyImageTransformPlugin),
    {
      formats: ["avif", "webp", "jpeg", "png"],

      htmlOptions: {
        imgAttributes: {
          loading: "lazy",
          decoding: "async",
        },
      },
    })
}
