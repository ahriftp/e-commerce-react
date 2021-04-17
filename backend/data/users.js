import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('qwertz999', 10),
        isAdmin: true
    },
    {
        name: 'Ganyu',
        email: 'ganyu@example.com',
        password: bcrypt.hashSync('qwertz999', 10),
    },
    {
        name: 'Kawakaze',
        email: 'kawakaze@example.com',
        password: bcrypt.hashSync('qwertz999', 10),
    },
]

export default users