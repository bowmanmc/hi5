import prisma from '../../lib/prisma';


export default async function handle(req, res) {
    const posts = await prisma.hi5.findMany();
    res.json(posts);
};
