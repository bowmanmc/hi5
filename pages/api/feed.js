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
            h5.id,
            h5.recipient,
            h5.author,
            h5.corevalue,
            h5.impact,
            h5.description,
            h5.gif,
            h5.created,
            h5.updated,
            string_agg(l.user, ',') likes
        from (
            select
                h.*,
                author.name as authorname,
                author.pic as authorpic,
                recipient.name as recipientname,
                recipient.pic as recipientpic
            from hi5 as h
            left join "user" author on h.author = author.email
            left join "user" recipient on h.recipient = recipient.email
        ) as h5
        left join "like" as l on h5.id = l."hi5Id"
        group by
            h5.id,
            h5.recipient,
            h5.author,
            h5.corevalue,
            h5.impact,
            h5.description,
            h5.gif,
            h5.created,
            h5.updated,
            authorname,
            authorpic,
            recipientname,
            recipientpic
        order by h5.created desc
    `;
    res.json(results);
};
