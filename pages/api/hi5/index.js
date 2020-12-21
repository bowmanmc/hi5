import giphy from '../../../lib/giphy';
import prisma from '../../../lib/prisma';


// POST /api/h5
export default async function handle(request, response) {
    const gif = giphy();
    const { author, recipient, corevalue, impact, description } = request.body;
    const result = await prisma.hi5.create({
        data: {
            recipient, author, corevalue, impact, description, gif
        },
    });
    response.json(result);
};
