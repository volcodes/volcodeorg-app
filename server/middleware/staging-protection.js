export default defineEventHandler((event) => {
  // Get runtime config
  const config = useRuntimeConfig();

  // If this is the staging environment and it's a search engine bot
  if (config.public.isStaging) {
    const userAgent = getRequestHeader(event, 'user-agent') || '';

    // List of common bot user agents
    const botPatterns = [
      'googlebot',
      'bingbot',
      'yandex',
      'baiduspider',
      'facebookexternalhit',
      'twitterbot',
      'rogerbot',
      'linkedinbot',
      'embedly',
      'quora link preview',
      'showyoubot',
      'outbrain',
      'pinterest',
      'slackbot',
      'vkShare',
      'W3C_Validator',
      'crawler',
      'spider',
      'ahrefsbot',
      'semrushbot'
    ];

    // Check if the user agent is a known bot
    const isBot = botPatterns.some((pattern) => userAgent.toLowerCase().includes(pattern.toLowerCase()));

    if (isBot) {
      // Return 403 Forbidden for bots on staging
      setResponseStatus(event, 403);
      return { error: 'Access denied for bots on staging environment' };
    }
  }
});
