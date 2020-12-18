import prisma from '../../../lib/prisma';


// POST /api/h5
export default async function handle(request, response) {
    const { author, recipient, category, description } = request.body;
    const result = await prisma.hi5.create({
        data: {
            author, recipient, category, description, likes: ''
        },
    });
    response.json(result);
};
