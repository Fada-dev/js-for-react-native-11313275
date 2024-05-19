function createUserProfiles(names, modifiedNames) {
    let id = 1;
    const userProfiles = names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++
    }));
    return userProfiles;
  }
  
  const names = ["Anthony", "Designer", "Ama"];
  const modifiedNames = ["Anthony", "DESIGNER", "Ama"];
  const profiles = createUserProfiles(names, modifiedNames);
  console.log(profiles);
  
