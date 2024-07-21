const FacebookStrategy = require('passport-facebook').Strategy;
const prisma = require('../../prisma/prisma');

require('passport');

module.exports = function (passport) {
    passport.use(
        new FacebookStrategy(
            {
                clientID: process.env.FACEBOOK_APP_ID,
                clientSecret: process.env.FACEBOOK_APP_SECRET,
                callbackURL: 'http://localhost:8000/auth/facebook/callback',
                passReqToCallback: true
            },
            async (req, accessToken, refreshToken, profile, done) => {
                done(null, profile)
                // try {
                //     // Check if profile object contains necessary information
                //     if (!profile || !profile.id || !profile.displayName || !profile.name || !profile.name.givenName || !profile.name.familyName || !profile.photos || !profile.photos[0] || !profile.photos[0].value || !profile.emails || !profile.emails[0] || !profile.emails[0].value) {
                //         return done(new Error('Incomplete profile data received from Google.'));
                //     }

                //     // Extract user data from Google profile
                //     const newUser = {
                //         googleId: profile.id,
                //         displayName: profile.displayName,
                //         firstName: profile.name.givenName,
                //         lastName: profile.name.familyName,
                //         image: profile.photos[0].value,
                //         email: profile.emails[0].value
                //     };

                //     await prisma.$transaction(async (prisma) => {
                //         // Check if user already exists in the database
                //         const existingUser = await prisma.oAuthUser.findFirst({ where: { email: newUser.email } });

                //         if (!existingUser) {
                //             // If user does not exist, save user data to the database
                //             const createdUser = await prisma.oAuthUser.create({
                //                 data: {
                //                     fullName: profile.displayName,
                //                     email: profile.emails[0].value,
                //                     avatarUrl: profile.photos[0].value,
                //                     oauthProvider: "GOOGLE",
                //                     oauthId: profile.id
                //                 }
                //             });

                //             // Create or update social handle
                //             const socialHandle = await prisma.socialHandle.upsert({
                //                 where: { userId: createdUser.id },
                //                 create: {
                //                     facebook: profile.id,
                //                     OAuthUser: { connect: { id: createdUser.id } }
                //                 },
                //                 update: { facebook: profile.id } // If social handle already exists, update googleId
                //             });

                //             done(null, createdUser);
                //         } else {
                //             done(null, existingUser); // User already exists, return existing user
                //         }
                //     });

                // } catch (err) {
                //     console.error(err);
                //     done(err); // Pass error to the done callback
                // }
            }
        )
    );

    // // Serialize user for the session
    // passport.serializeUser((user, done) => {
    //     done(null, user.id);
    // });

    // // Deserialize user
    // passport.deserializeUser((id, done) => {
    //     prisma.oAuthUser.findUnique({ where: { id } })
    //         .then(user => done(null, user))
    //         .catch(err => done(err));
    // });
};
