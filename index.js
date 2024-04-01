// Task 1
const task1 = (n) => n.reduce((acc, num, i) => {
    if (num % 3 === 0) {
        acc.push({
            'id': i,
            'value': num,
        });
    }
    return acc;
}, []);

// console.log(task1([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Task 2
const task2 = (n) => n.filter((num) => num % 2 === 0);

// console.log(task2([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Task 3
const task3 = (words) => words
  .map((word) => (word[0]).toUpperCase() + word.slice(1))
  .join(' ');

// console.log(task3(['В', 'лесу', 'родилась', 'елочка']));

// Task 4
const task4 = (str) => str
  .split(' ')
  .map((word) => word.length > 1
    ? word.at(-1) + word.slice(1, word.length - 1) + word[0]
    : word)
  .join(' ');

// console.log(task4('В лесу родилась елочка'));

// Task 5
const task5 = (nums) => nums.reduce((acc, num) => {
    if (num > 0) {
        acc.positive += 1;
    } else {
        acc.negative *= num;
    }
    return acc;
}, {'positive': 0, 'negative': 1});

// console.log(task5([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Task 6

const task6 = (nums) => (nums.filter((num, i) => num > nums[i + 1])).length;

// console.log(task6([24, 35, 29, 44, 8, 22, 4]));

// Task 7
const task7 = (team1, team2) => {
    return !!(team1
      .filter((player) => team2.includes(player))).length;
};

const team1 = [169, 174, 182, 173, 177];
const team2 = [172, 150, 167, 174, 170];
const team3 = [172, 150, 167, 172, 170];

// console.log(task7(team1, team2));
// console.log(task7(team1, team3));

// Task 8
const task8 = (nums) => {
    return !!(nums.reduce((acc, num) => {
        if (acc[0].includes(num)) {
            acc[1] += 1;
        } else {
            acc[0].push(num);
        }
        return acc;
    }, [[], 0]))[1];
};

// console.log(task8([1, 2, 3, 4, 6, 6, 3, 8, 9, 0]));
// console.log(task8([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Task 9
const students = [

    {name: 'Tirion', class: 'B', mark: 3},

    {name: 'Keit', class: 'A', mark: 3},

    {name: 'Ramsey', class: 'A', mark: 4},

    {name: 'Mike', class: 'B', mark: 5},

    {name: 'Alex', class: 'C', mark: 2},

];

const task9A = (students) => {
    const marks = students.map(student => student.mark);
    const sum = marks.reduce((acc, mark) => acc + mark);
    const studentsCount = students.length;
    const gpa = sum / studentsCount;
    const max = Math.max(...marks);
    const min = Math.min(...marks);
    return {gpa, max, min, sum, studentsCount};
};

// console.log(task9A(students));

const task9B = (students) => students.reduce((acc, student) => {
    const cls = student.class;
    if (!Object.hasOwn(cls)) {
        acc[cls] = students.filter(student => student.class === cls);
    }
    return acc;
}, {});

// console.log(task9B(students));

// Task 10
const sites = [
    'http://google.com',
    'https://hexlet.io',
    'yandex.ru',
    'dzen.ru',
    'https://ya.ru ',
    'https://github.com',
    'http://mail.ru',
];

const task10 = (sites) => sites.reduce((acc, site) => {
    if (site.startsWith('https')) {
        acc.https += 1;
    } else {
        acc.http += 1;
    }
    return acc;
}, {'http': 0, 'https': 0});

// console.log(task10(sites));
