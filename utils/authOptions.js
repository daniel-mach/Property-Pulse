import GoogleProvier from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvier({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    // Successful sign-in
    async signIn({ profile }) {
      // Connect to database
      // Check if user exists
      // If user doesn't exist, add user to the database
      // Return true to allow sign-in
    },
    // Modify session object
    async session({ session }) {
      // Get user from database
      // Assign user id to the session
      // Return session
    }
  }
};
