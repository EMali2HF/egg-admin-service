
db.users.insert({
  _id: ObjectId('5ae16cc3e928ed4ac5f887a0'),
  password: 'e10adc3949ba59abbe56e057f20f883e',
  account: 'admin',
  name: '超级管理员',
  update_date: ISODate('2018-04-27T07:00:28.586Z'),
  create_date: ISODate('2018-04-26T06:08:03.756Z'),
  __v: 0,
  email: 'admin@admin.com',
  mobile: '18711111111',
});

db.groups.insert({
  _id: ObjectId('5ae18d0efbbe77641966cb60'),
  name: 'admin',
  update_date: ISODate('2018-04-27T07:00:28.582Z'),
  create_date: ISODate('2018-04-26T08:25:50.341Z'),
  __v: 0,
  describe: '超级管理员',
  users: [
    '5ae16cc3e928ed4ac5f887a0',
  ],
  modules: [
    '5ae2b70d772d6f2d78726acb',
    '5ae2b741772d6f2d78726acc',
    '5ae2b74d772d6f2d78726acd',
    '5ae2b75a772d6f2d78726ace',
    '5ae2b765772d6f2d78726acf',
    '5ae2b76f772d6f2d78726ad0',
    '5ae2b6e6772d6f2d78726aca',
    '5ae2ba0d06ebe130282a3969',
    '5ae2ba4f06ebe130282a396a',
    '5ae2ba5a06ebe130282a396b',
    '5ae2ba6306ebe130282a396c',
    '5ae2ba6d06ebe130282a396d',
    '5ae2ba7606ebe130282a396e',
    '5ae2ba8006ebe130282a396f',
    '5ae2ba8a06ebe130282a3970',
    '5ae2ba9406ebe130282a3971',
    '5ae2b9dc06ebe130282a3968',
    '5ae2bb1306ebe130282a3973',
    '5ae2bb1e06ebe130282a3974',
    '5ae2bb2706ebe130282a3975',
    '5ae2bb2f06ebe130282a3976',
    '5ae2bb3806ebe130282a3977',
    '5ae2bb4106ebe130282a3978',
    '5ae2baff06ebe130282a3972',
    '5ae2a084dfa9080ec4bf4a6d',
  ],
});

db.modules.insert([
  {
    _id: ObjectId('5ae2a084dfa9080ec4bf4a6d'),
    name: '权限管理',
    uri: 'auth',
    parent_id: '',
    update_date: ISODate('2018-04-27T06:06:26.236Z'),
    create_date: ISODate('2018-04-27T04:01:08.952Z'),
    sort: 1,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2b6e6772d6f2d78726aca'),
    name: '用户管理',
    parent_id: '5ae2a084dfa9080ec4bf4a6d',
    update_date: ISODate('2018-04-27T06:43:36.160Z'),
    create_date: ISODate('2018-04-27T05:36:38.388Z'),
    sort: 0,
    __v: 0,
    uri: 'auth.user',
  },
  {
    _id: ObjectId('5ae2b70d772d6f2d78726acb'),
    name: '用户列表',
    uri: 'auth.user.index',
    parent_id: '5ae2b6e6772d6f2d78726aca',
    update_date: ISODate('2018-04-27T06:43:36.144Z'),
    create_date: ISODate('2018-04-27T05:37:17.146Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2b741772d6f2d78726acc'),
    name: '新建用户',
    uri: 'auth.user.create',
    parent_id: '5ae2b6e6772d6f2d78726aca',
    update_date: ISODate('2018-04-27T06:43:36.147Z'),
    create_date: ISODate('2018-04-27T05:38:09.041Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2b74d772d6f2d78726acd'),
    name: '删除用户',
    uri: 'auth.user.destroy',
    parent_id: '5ae2b6e6772d6f2d78726aca',
    update_date: ISODate('2018-04-27T06:43:36.149Z'),
    create_date: ISODate('2018-04-27T05:38:21.861Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2b75a772d6f2d78726ace'),
    name: '用户详情',
    uri: 'auth.user.edit',
    parent_id: '5ae2b6e6772d6f2d78726aca',
    update_date: ISODate('2018-04-27T06:43:36.153Z'),
    create_date: ISODate('2018-04-27T05:38:34.611Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2b765772d6f2d78726acf'),
    name: '修改用户详情',
    uri: 'auth.user.update',
    parent_id: '5ae2b6e6772d6f2d78726aca',
    update_date: ISODate('2018-04-27T06:43:36.155Z'),
    create_date: ISODate('2018-04-27T05:38:45.456Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2b76f772d6f2d78726ad0'),
    name: '重置密码',
    uri: 'auth.user.setPassword',
    parent_id: '5ae2b6e6772d6f2d78726aca',
    update_date: ISODate('2018-04-27T06:43:36.158Z'),
    create_date: ISODate('2018-04-27T05:38:55.435Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2b9dc06ebe130282a3968'),
    name: '用户组管理',
    uri: 'auth.group',
    parent_id: '5ae2a084dfa9080ec4bf4a6d',
    update_date: ISODate('2018-04-27T06:43:36.185Z'),
    create_date: ISODate('2018-04-27T05:49:16.063Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba0d06ebe130282a3969'),
    name: '用户组列表',
    uri: 'auth.group.index',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.163Z'),
    create_date: ISODate('2018-04-27T05:50:05.074Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba4f06ebe130282a396a'),
    name: '添加用户组',
    uri: 'auth.group.create',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.165Z'),
    create_date: ISODate('2018-04-27T05:51:11.006Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba5a06ebe130282a396b'),
    name: '删除用户组',
    uri: 'auth.group.destroy',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.167Z'),
    create_date: ISODate('2018-04-27T05:51:22.059Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba6306ebe130282a396c'),
    name: '用户组详情',
    uri: 'auth.group.edit',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.171Z'),
    create_date: ISODate('2018-04-27T05:51:31.332Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba6d06ebe130282a396d'),
    name: '修改用户组详情',
    uri: 'auth.group.update',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.173Z'),
    create_date: ISODate('2018-04-27T05:51:41.524Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba7606ebe130282a396e'),
    name: '成员查看',
    uri: 'auth.group.getUser',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.177Z'),
    create_date: ISODate('2018-04-27T05:51:50.732Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba8006ebe130282a396f'),
    name: '成员设置',
    uri: 'auth.group.setUser',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.180Z'),
    create_date: ISODate('2018-04-27T05:52:00.707Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba8a06ebe130282a3970'),
    name: '权限查看',
    uri: 'auth.group.getModule',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.181Z'),
    create_date: ISODate('2018-04-27T05:52:10.986Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2ba9406ebe130282a3971'),
    name: '权限设置',
    uri: 'auth.group.setModule',
    parent_id: '5ae2b9dc06ebe130282a3968',
    update_date: ISODate('2018-04-27T06:43:36.183Z'),
    create_date: ISODate('2018-04-27T05:52:20.252Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2baff06ebe130282a3972'),
    name: '功能模块管理',
    uri: 'auth.module',
    parent_id: '5ae2a084dfa9080ec4bf4a6d',
    update_date: ISODate('2018-04-27T06:06:26.232Z'),
    create_date: ISODate('2018-04-27T05:54:07.280Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2bb1306ebe130282a3973'),
    name: '模块列表',
    uri: 'auth.module.index',
    parent_id: '5ae2baff06ebe130282a3972',
    update_date: ISODate('2018-04-27T06:43:36.188Z'),
    create_date: ISODate('2018-04-27T05:54:27.375Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2bb1e06ebe130282a3974'),
    name: '添加模块',
    uri: 'auth.module.create',
    parent_id: '5ae2baff06ebe130282a3972',
    update_date: ISODate('2018-04-27T06:43:36.192Z'),
    create_date: ISODate('2018-04-27T05:54:38.858Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2bb2706ebe130282a3975'),
    name: '删除模块',
    uri: 'auth.module.destroy',
    parent_id: '5ae2baff06ebe130282a3972',
    update_date: ISODate('2018-04-27T06:06:26.223Z'),
    create_date: ISODate('2018-04-27T05:54:47.486Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2bb2f06ebe130282a3976'),
    name: '模块详情',
    uri: 'auth.module.edit',
    parent_id: '5ae2baff06ebe130282a3972',
    update_date: ISODate('2018-04-27T06:43:36.194Z'),
    create_date: ISODate('2018-04-27T05:54:55.391Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2bb3806ebe130282a3977'),
    name: '修改模块详情',
    uri: 'auth.module.update',
    parent_id: '5ae2baff06ebe130282a3972',
    update_date: ISODate('2018-04-27T06:43:36.197Z'),
    create_date: ISODate('2018-04-27T05:55:04.553Z'),
    sort: 0,
    __v: 0,
  },
  {
    _id: ObjectId('5ae2bb4106ebe130282a3978'),
    name: '系统级模块列表',
    uri: 'auth.module.system',
    parent_id: '5ae2baff06ebe130282a3972',
    update_date: ISODate('2018-04-27T06:43:36.199Z'),
    create_date: ISODate('2018-04-27T05:55:13.396Z'),
    sort: 0,
    __v: 0,
  }]);
