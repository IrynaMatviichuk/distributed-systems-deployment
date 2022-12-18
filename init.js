db = db.getSiblingDB('todoapp')
db.createUser({
  user: 'todoappuser',
  pwd: 'todoappuser',
  roles: [
    {
      role: 'readWrite',
      db: 'todoapp',
    },
  ],
})
