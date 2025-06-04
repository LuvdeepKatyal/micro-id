const CUSTOM_EPOCH = 1577836800000;

function pad(num, length){
  return num.toString().padStart(length, "0");
}

function generateUniqueId() {
  const now = Date.now();
  const delta = now - CUSTOM_EPOCH;

  const random = Math.floor(
    Math.random() * Math.pow(10, 3)
  );

  const rawId = `${delta}${pad(1, 2)}${pad(random, 3)}`;
  
  return toBase62(BigInt(rawId));
}

function toBase62(num) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let str = "";
  while (num > 0n) {
    str = chars[num % 62n] + str;
    num = num / 62n;
  }
  return str || "0";
};

module.exports = { generateUniqueId };