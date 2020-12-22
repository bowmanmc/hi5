import { getSession } from 'next-auth/client'

import giphy from '../../../lib/giphy';
import prisma from '../../../lib/prisma';


// POST /api/h5
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });
    if (session) {
        const gif = giphy();
        const author = session.user.email;
        const { recipient, corevalue, impact, description } = request.body;
        const result = await prisma.hi5.create({
            data: {
                recipient, author, corevalue, impact, description, gif
            },
        });
        response.json(result);
    }
    else {
        response.json({
            error: 'Not authorized.'
        });
    }
};
