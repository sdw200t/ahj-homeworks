export default function colorStatus(obj) {
  if (obj.hasOwnProperty('health')) {
    if (obj.health > 50) {
      return 'healthy';
    } if (obj.health <= 50 && obj.health >= 15) {
      return 'wounded';
    }
    return 'critical';
  }
  return 'error obj';
}
