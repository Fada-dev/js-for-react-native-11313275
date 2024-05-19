function createUserProfiles(names, modifiedNames) {
    let id = 1;
    const userProfiles = names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++
    }));
    return userProfiles;
  }
  
  const names = ["John", "Alice", "Bob"];
  const modifiedNames = ["J0hn", "Al1ce", "B0b"];
  const profiles = createUserProfiles(names, modifiedNames);
  console.log(profiles);
  
