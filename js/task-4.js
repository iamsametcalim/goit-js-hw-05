console.log("task 4 starts from here");

//! ödevdeki kod
const allUsersSecond = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

//! çözüm
const getTotalBalanceByGender = (users, gender) => {
  return users.reduce((total, user) => {
    return user.gender === gender ? total + user.balance : total;
  }, 0);
};

//! örnek kullanım
console.log(getTotalBalanceByGender(allUsersSecond, "male")); // 12053

console.log(getTotalBalanceByGender(allUsersSecond, "female")); // 8863
