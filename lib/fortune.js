const fortuneCookies = [
  "You'll get a gift",
  "You'll meet a love of your life",
  "You'll have a bad day",
  "You'll get extra money",
  "Aware! You'll get an risk offer",
];

const getFortune = () => {
  const index = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[index];
};

module.exports = getFortune;
