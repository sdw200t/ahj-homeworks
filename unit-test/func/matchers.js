export default function getOrderedProps(obj) {
  const sortObjProperties = obj
    .sort((a, b) => b.health - a.health);

  return sortObjProperties;
}
