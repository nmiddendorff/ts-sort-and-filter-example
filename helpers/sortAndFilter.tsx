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
        if (a.first_name < b.first_name) {
          return -1;
        }
        if (a.first_name > b.first_name) {
          return 1;
        }
      } else if (sortOption === "ZA") {
        if (a.first_name < b.first_name) {
          return 1;
        }
        if (a.first_name > b.first_name) {
          return -1;
        }
      }
      return 0;
    });
  }

  const foundItems = dataSorted.filter(function (user) {
    return user.first_name.toLowerCase().indexOf(lowerCaseInput) > -1;
  });

  return foundItems;
};
