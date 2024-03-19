import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
    providers: [
        KeycloakProvider({
            clientId: process.env.KC_CLIENT_ID || "",
            clientSecret: process.env.KC_CLIENT_SECRET || "",
            issuer: process.env.KC_ISSUER || "",
            idToken: true
        })
    ]
})


export { handler as GET, handler as POST }

