const getTokens = (input, type) => {
  const tokens =
    type === "e"
      ? require("./../EnglishTokens.json")
      : require("./../RevianTokens.json");
  const result = {
    token: "",
    id: -1,
  };

  if (typeof input === "string") {
    // We are looking for the id
    result.token = input;
    // Has to be findIndex and not indexOf because I need an exact match, not a contains match
    result.id = tokens.findIndex((token) => token === input);
  } else {
    result.token = tokens[input];
    result.id = input;
  }

  return result;
};

module.exports = { getTokens };
