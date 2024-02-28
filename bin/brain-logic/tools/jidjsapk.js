function checkNumberOrString(userAnswer) {
    if (typeof(userAnswer) === "number") {
      return true;
    } else if (typeof(userAnswer) === "string") {
        return true;
  }
  return false;
};

export default checkNumberOrString;
