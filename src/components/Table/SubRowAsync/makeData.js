/* eslint-disable no-plusplus */
import namor from 'namor';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      // eslint-disable-next-line no-nested-ternary
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
          ? 'complicated'
          : 'single'
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => newPerson());
  };

  return makeDataLevel();
}

export function dataSelector(lesson) {
  const { content } = lesson;
  const filtered = content.map(() => ({
    date: lesson.scheduled_start,
    time: lesson.scheduled_start,
    duration: lesson.duration,
    teacher: lesson.teacher.full_name,
    subject: lesson.subject.name,
    link: 'undefined'
  }));
  return filtered();
}
