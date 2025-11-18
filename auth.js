 import NextAuth from "next-auth";
 import Google from "next-auth/providers/google";

 export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [
     Google({
       clientId: process.env.AUTH_GOOGLE_ID,
       clientSecret: process.env.AUTH_GOOGLE_SECRET,
     }),
   ],
callbacks: {
  async session({ session, token }) {
    session.user.id = token.id
    session.user.image = token.picture // store it as 'image' instead of 'picture'
    return session
  },

  async jwt({ token, profile }) {
    if (profile) {
      token.id = profile.sub
      token.picture = profile.picture || profile.image // support both
    }
    return token
  }
}

 });