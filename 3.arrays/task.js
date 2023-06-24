function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((val, index) => val === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter((user) => user.gender === gender);
  const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
  const avgAge = totalAge / (filteredUsers.length || 1);
  return avgAge;
}
