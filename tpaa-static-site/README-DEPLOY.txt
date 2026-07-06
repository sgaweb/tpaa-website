TPAA STATIC SITE - DEPLOYMENT GUIDE
====================================

WHAT THIS IS
A complete, self-contained static rebuild of pipeline-safety.org.
No WordPress, no database, no plugins - nothing to hack or update.
All original URLs are preserved (/planning-to-dig-or-build/, /faq/, etc.)
so search engines can re-index the clean site in place.

====================================================================
OPTION A - KINSTA / SEVALLA (free static hosting, deploys from GitHub)
====================================================================
1. Unzip this file on your computer.
2. On GitHub: click "+" > New repository. Name it (e.g. tpaa-website).
   Private is fine. Create it.
3. On the new repo page, click "uploading an existing file".
   Drag in the CONTENTS of the unzipped folder (index.html, style.css,
   all the page folders, js/, assets/, favicon.svg, robots.txt,
   sitemap.xml, 404.html) - NOT the folder itself. index.html must sit
   at the top level of the repo. Commit to main.
   (.htaccess is Apache-only; Kinsta ignores it - skip it or keep it.)
4. In MyKinsta (you may be directed to Sevalla - same company):
   Static Sites > Add static site > connect your GitHub account >
   pick the repo and the main branch > enable automatic deployment.
   Build command: leave EMPTY. Publish directory: .  (the files are
   already built). Deploy.
5. You'll get a temporary *.kin.page URL - click through every page
   to verify.
6. Domains > Add domain > enter www.pipeline-safety.org and follow the
   DNS instructions shown (you'll add records at your domain registrar).
   SSL is automatic and free.
7. To edit the site later: change the file in GitHub (the pencil icon
   works in the browser) - Kinsta redeploys automatically.

====================================================================
OPTION B - HOSTINGER / ANY cPANEL-STYLE HOST (direct file upload)
====================================================================
1. In the host's File Manager, DELETE everything in public_html
   (the old WordPress install is compromised - keep a downloaded
   backup for reference only, never reuse it).
2. Upload the CONTENTS of this zip into public_html.
3. Enable SSL, then uncomment the HTTPS redirect lines in .htaccess.

====================================================================
AFTER DEPLOY (either option)
====================================================================
- The hacked site stays live until DNS points at the new host. Change
  DNS as soon as the new site is verified.
- Change ALL old passwords: previous hosting account, FTP, domain
  registrar, and email on the domain. Assume old credentials are burned.
- Google Search Console: verify the domain, submit /sitemap.xml, and
  if the site was flagged as hacked, request a security review.
- Add the TPAA bylaws PDF at /assets/tpaa-bylaws.pdf (the About page
  links there).

EDITING CONTENT
Every page is a plain index.html inside its named folder. Site-wide
styles live in style.css.

NOT INCLUDED YET
- Spanish (/es/) section - can be added as matching folders
- Member company logo images - names shown as text cards for now
