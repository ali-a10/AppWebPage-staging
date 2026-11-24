// TEMPORARY: staging pointed at the PROD database and Stripe LIVE mode, for the one Phase 3 web-join run.
// Put the dev config.js back right after (git checkout config.js).
// Everything here is public on purpose. NEVER put a service-role key, a Stripe secret key (sk_...),
// a webhook secret or WEB_GUESS_SECRET in this file.
window.LETSPLAY_CONFIG = {
  env: "staging",
  supabaseUrl: "https://ptrnhmhhecsmosgetgvk.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0cm5obWhoZWNzbW9zZ2V0Z3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MTc5MzUsImV4cCI6MjA4NTI5MzkzNX0.LuLgM7ypMevz_NknoJuQEjG6ZHqHobdvdQuVd6GHaME",
  // "Open in the app" targets the store app (1.2.0) for this run.
  appScheme: "letsplay",
  androidPackage: "ca.letsplayapp.letsplay",
  stripePublishableKey: "pk_live_51TjV1mIRvHCEHw0iWsOHgFqq5BnrCdSwOEHZHkFl1zuIPFrIZHhSl7lH6hmeC1DgLMJa7b3t1S9FOdo6Snzy1Lqy00rLbBADqU",
};
