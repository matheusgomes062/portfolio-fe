import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    })
  ],
});
