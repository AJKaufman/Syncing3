let charList = {};

const setCharacterList = (characterList) => {
  charList = characterList;
};

const setCharacter = (character) => {
  charList[character.hash] = character;
};

const gravity = (character) => {
  
};


module.exports.setCharacterList = setCharacterList;
module.exports.setCharacter = setCharacter;
