import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    // GoogleProvider({
    //   clientId: `1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com`,
    //   clientSecret: `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`,
    // }),
  ],
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};

export default authOptions;
