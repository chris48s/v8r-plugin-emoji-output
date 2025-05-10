import { BasePlugin } from "v8r";

class EmojiOutput extends BasePlugin {
  static name = "v8r-plugin-emoji-output";

  registerOutputFormats() {
    return ["emoji"];
  }

  getSingleResultLogMessage(result, format) {
    if (format === "emoji") {
      if (result.valid === true) {
        return "👍";
      }
      return "👎";
    }
  }
}

export default EmojiOutput;
