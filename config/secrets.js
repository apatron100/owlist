/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
export const sessionSecret = process.env.SESSION_SECRET || 'Your Session Secret goes here';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || '332992729498-cd1hj1ipb8k64tdel37ahkolmraeqg1v.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || 'YtjCW4ttEsCSL-N60jXWbe-N',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback',
  apiKey: 'AIzaSyB78utweN6bN9qYGPFnKa7UTpoEw22dbg0'
};

/* To make sure everything referencing the session ID knows what it is called */
export const sessionId = 'sid';
