import prisma from './prisma';

/*
 * This gets called
 */
export default async function updateUser(user) {
    const record = {
        name: user.name,
        email: user.email,
        pic: user.image,
    };
    const result = await prisma.user.upsert({
        where: { email: user.email },
        update: record,
        create: record,
    });
    if (result) {
        Promise.resolve(true);
    }
    else {
        Promise.resolve(false);
    }
};
