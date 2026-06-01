const badgeMap = {
  React: '![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)',
  Vite: '![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)',
  'Node.js': '![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)',
  Express: '![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)',
  MongoDB: '![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)',
  Mongoose: '![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)',
  'Tailwind CSS': '![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)',
  JavaScript: '![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)',
  TypeScript: '![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)',
  Python: '![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)',
  'Socket.io': '![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)'
};

const buildBadges = (stack = []) => stack.map(t => badgeMap[t]).filter(Boolean).join('\n');

module.exports = { badgeMap, buildBadges };
