export interface Task {
  id: string;
  optionId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export const TASKS = [
  {
    id: 't4',
    optionId: '2',
    title: 'Master Vue.js',
    summary: 'Focus on writing maintainable and scalable code.',
    dueDate: '2024-05-23',
  },
  {
    id: 't5',
    optionId: '1',
    title: 'Optimize Performance',
    summary:
      'Learn all the basic and advanced features and apply them in projects.',
    dueDate: '2024-10-12',
  },
  {
    id: 't6',
    optionId: '3',
    title: 'Complete Backend API',
    summary:
      'Work on project optimizations and enhance your development skills.',
    dueDate: '2025-07-14',
  },
  {
    id: 't7',
    optionId: '4',
    title: 'Write Unit Tests',
    summary: 'Focus on writing maintainable and scalable code.',
    dueDate: '2024-11-29',
  },
  {
    id: 't8',
    optionId: '2',
    title: 'Refactor Code',
    summary:
      'Implement modern technologies in practice and build a robust system.',
    dueDate: '2025-02-17',
  },
  {
    id: 't9',
    optionId: '3',
    title: 'Build a Fullstack App',
    summary:
      'Learn all the basic and advanced features and apply them in projects.',
    dueDate: '2025-09-08',
  },
  {
    id: 't10',
    optionId: '1',
    title: 'Learn TypeScript',
    summary:
      'Work on project optimizations and enhance your development skills.',
    dueDate: '2026-03-25',
  },
];

