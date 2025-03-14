import NextAuth from "next-auth";
import Google from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],

    callbackURL: {
        async session({session, token}) {
            session.user.username = session.user.name.split(" ").join('').toLowerCase();
            session.user.uid = token.sub;
            return session;
        }
    }
});


export { handler as GET, handler as POST };