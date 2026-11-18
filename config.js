// Staging settings: the DEV database and Stripe TEST mode.
// Everything here is public on purpose. The Supabase anon key and the Stripe publishable key
// are made to be shown in web pages (the same ones ship inside the app); the database rules
// and the server functions are what protect data. NEVER put a service-role key, a Stripe
// secret key (sk_...), a webhook secret or WEB_GUESS_SECRET in this file.
window.LETSPLAY_CONFIG = {
  env: "staging",
  supabaseUrl: "https://rlrbrtiswtsgdybaqmst.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscmJydGlzd3RzZ2R5YmFxbXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTM2NjcsImV4cCI6MjEwMzE4OTY2N30.pCLdnoKMLL4yGdxcrEF3VUMw-ArZh-SRfFout4JQHeY",
  // "Open in the app" targets the dev build (LetsPlay Dev) on staging.
  appScheme: "letsplay-dev",
  androidPackage: "ca.letsplayapp.letsplay.dev",
  stripePublishableKey: "pk_test_51TjV1xEnREJi5LRXHkHNCduXxflBqEDjOSmvwvVAyJkbb4dNJ8r5JegTt7X3jniIwojmzrrIgaKf6CmEGeHB8sMm00pGorrA4A",
};
