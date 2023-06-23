export default function specialAttack(character) {
  const arr = [];
  character.special.forEach((elem) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
