import {atom, useRecoilValue, useSetRecoilState} from 'recoil';

const initialTasks = [];

export const taskState = atom({
  key: 'task',
  default: initialTasks,
});

// export const addTasks = async (task) => {
//   try {
//     await fetch(URL, {
//       method: 'POST',
//       body: task,
//     });
//     const tasks = useRecoilValue(taskState);
//     const _tasks = [...tasks, task];
//     setTasks(tasks);
//   } catch(e) {
//   }
// };
