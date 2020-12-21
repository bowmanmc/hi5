import prisma from '../../lib/prisma';


export default async function handle(req, res) {
    /*
     * This is kind of weird, but since you can give hi5's to users who
     * may not have accounts yet, I needed to left join here and not
     * enforce any sort of constraint in the db. That way at a minimum
     * we'll get the recipient's email address, but we might also get
     * their name and profile pic if they've logged in.
     */
    const results = await prisma.$queryRaw`
        select
            hi5.*,
            author.name as authorname,
            author.pic as authorpic,
            recipient.name as recipientname,
            recipient.pic as recipientpic
        from hi5
        left join "user" author on hi5.author = author.email
        left join "user" recipient on hi5.recipient = recipient.email
        order by hi5.created desc;
    `;
    res.json(results);
};
