const config = {
  siteTitle: "Gaël Billon | Développeur web à Grenoble", // Site title.
  siteTitleShort: "Gaël Billon", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Gaël Billon | Développeur web à Grenoble", // Alternative site title for SEO.
  siteLogo: "/images/Profile.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://gaelbillon.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "👋 I’m Gaël, born and raised in the world wide web. Web developper since 1998, Business Analyst, 📱 Mobile web apps developer, Search optimizer & webmarketing specialist, ⚡️ Webperformance activist, 👤 User experience & customer satisfaction zealot", // Website description used for RSS feeds/meta description tag.
  siteKeywords:
    "Gaël Billon, Grenoble, Webdev, Webperf, Business Analyst, SEO, webmarketing, UX, Product Design, Product Development",
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Gaël Billon | Développeur web à Grenoble", // Title of the RSS feed
  siteFBAppID: "", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-18519226-7", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Technology", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MMM DD, YYYY",
  locale: "en", // Date format for display.
  userName: "Gaël Billon", // Username to display in the author segment.
  userTwitter: "@gaelbillon", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Grenoble", // User location to display in the author segment.
  userAvatar: "/images/Profile.jpg", // User avatar to display in the author segment.
  userDescription:
    "👋 I’m Gaël, born and raised in the world wide web. Web developper since 1998, Business Analyst, 📱 Mobile web apps developer, Search optimizer & webmarketing specialist, ⚡️ Webperformance activist, 👤 User experience & customer satisfaction zealot", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  // userLinks: [
  //   {
  //     label: "Twitter",
  //     url: "https://twitter.com/gaelbillon",
  //     iconClassName: "fa fa-twitter",
  //   },
  //   {
  //     label: "Email",
  //     url:
  //       "mailto:&#103;&#097;&#101;&#108;&#046;&#098;&#105;&#108;&#108;&#111;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;",
  //     iconClassName: "fa fa-envelope",
  //   },
  //   {
  //     label: "Github",
  //     url: "https://twitter.com/gaelbillon",
  //     iconClassName: "fa fa-github",
  //   },
  //   {
  //     label: "Github",
  //     url: "https://linkedin.com/in/gaelbillon",
  //     iconClassName: "fa fa-linkedin",
  //   },
  //   {
  //     label: "Instagram",
  //     url: "https://instagram.com/gael_billon",
  //     iconClassName: "fa fa-instagram",
  //   },
  //   {
  //     label: "Sketchfab",
  //     url: "https://sketchfab.com/gael.billon",
  //     iconClassName: "fa fa-cube",
  //   },
  // ],
  copyright: "©2020 Gaël Billon.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#FFD644", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  maxWidth: 1080
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
