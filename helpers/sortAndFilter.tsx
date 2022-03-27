import { person } from "../models/person";

export const sortAndFilter = (
  enteredName: string,
  sortOption: string,
  data: person[]
) => {
  const lowerCaseInput = enteredName.toLowerCase();

  let dataSorted = [...data];

  if (sortOption === "Default") {
    console.log(data);
    dataSorted = data;
  } else {
    dataSorted = dataSorted.sort(function (a, b) {
      if (sortOption === "AZ") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (sortOption === "ZA") {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      }
      return 0;
    });
  }

  const foundItems = dataSorted.filter(function (user) {
    return user.name.toLowerCase().indexOf(lowerCaseInput) > -1;
  });

  return foundItems;
};
