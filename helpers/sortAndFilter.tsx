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

  const fields = ["first_name", "last_name", "email"];

  const checkForAnyToBeTrue = (user: person) => {
    for (let i = 0; i < fields.length; i++) {
      if (
        user[fields[i] as keyof person].toLowerCase().indexOf(lowerCaseInput) >
        -1
      ) {
        return true;
      }
    }
    return false;
  };

  const foundItems = dataSorted.filter(function (user) {
    return checkForAnyToBeTrue(user);
  });

  return foundItems;
};
