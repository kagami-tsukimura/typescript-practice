import { Blog, User } from './moduleExport';
import UserDefault from './moduleExportDefault';

const user: User = { id: 1, name: 'kagami' };
const defaultUser: UserDefault = { id: 0, name: 'hoge' };
const blog: Blog = { id: 0, content: 'qiita' };

console.log(user.name);
console.log(defaultUser.name);
console.log(blog.content);
