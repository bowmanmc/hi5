import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import updateUser from '../../../lib/updateUser';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
    // https://next-auth.js.org/configuration/providers
    providers: [
        Providers.Google({
            clientId: '354391708359-em9q2cpp4qfhsvkc9m0cv2j1njhkf0as.apps.googleusercontent.com',//process.env.GOOGLE_ID,
            clientSecret: 'rTKWrNcE9qVvn8POVOTYhscd',//process.env.GOOGLE_SECRET,
        }),
    ],

    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a seperate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,

    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        jwt: true,

        // Seconds - How long until an idle session expires and is no longer valid.
        // maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
        // A secret to use for key generation (you should set this explicitly)
        secret: 'INpasdf8IvdIyeMcoG2asdfAgFGoA61DdBglwwSqnXJZkgz8PSnw',
        // Set to true to use encryption (default: false)
        // encryption: true,
        // You can define your own encode/decode functions for signing and encryption
        // if you want to override the default behaviour.
        // encode: async ({ secret, token, maxAge }) => {},
        // decode: async ({ secret, token, maxAge }) => {},
    },

    // You can define custom pages to override the built-in pages.
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
        // signIn: '/api/auth/signin',  // Displays signin buttons
        // signOut: '/api/auth/signout', // Displays form with sign out button
        // error: '/api/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/api/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // signIn: async (user, account, profile) => { return Promise.resolve(true) },
        signIn: updateUser,
        // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
        // session: async (session, user) => { return Promise.resolve(session) },
        // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},

    // Enable debug messages in the console if you are having problems
    debug: false,
};

const handler = (req, res) => NextAuth(req, res, options);
export default handler;
