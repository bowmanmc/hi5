import { getSession } from 'next-auth/client'

import prisma from '../../lib/prisma';


// POST /api/like
export default async function handle(request, response) {
    const session = await getSession({
        req: request
    });

    if (session) {
        const author = session.user.email;
        const { hi5Id } = request.body;
        // const result = await prisma.hi5.create({
        //     data: {
        //         recipient, author, corevalue, impact, description, gif
        //     },
        // });
        const like = await prisma.like.findFirst({
            where: {
                hi5Id: hi5Id,
                user: author,
            }
        });
        // Toggle the like... so if there is a result in like, remove
        // it, otherwise add it.
        if (like) {
            // remove the like
            await prisma.like.delete({
                where: {
                    id: like.id
                }
            });
            response.json({operation: 'delete', success: true});
        }
        else {
            // // create the like
            // const hi5 = await prisma.hi5.findUnique({
            //     where: {
            //         id: hi5Id,
            //     }
            // });
            await prisma.like.create({
                data: {
                    user: author,
                    hi5: {
                        connect: {
                            id: hi5Id
                        }
                    }
                }
            });
            response.json({operation: 'create', success: true});
        }
    }
    else {
        response.json({
            error: 'Not authorized.'
        });
    }
};
