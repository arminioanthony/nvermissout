# Keep the CPA Dashboard and Never Miss Out Separate

## The important rule

Do **not** upload the Never Miss Out ZIP to the existing `cpa4me` Netlify project. A Netlify project has one live production deployment, so a new production ZIP in that project would replace the CPA dashboard files.

The domain is not the problem. The websites need separate Netlify projects.

## Recommended structure

| Website | Netlify project | Public address |
|---|---|---|
| Financial dashboard | Existing `cpa4me` project | `cpa.supremestickerplug.com` |
| Never Miss Out | New `never-miss-out` project | `supremestickerplug.com`, `www.supremestickerplug.com`, or another chosen hostname |

You may also use `shop.supremestickerplug.com` for Never Miss Out if you are not ready to change the apex/root domain.

## Safe setup sequence

1. Leave the existing `cpa4me` project and its `cpa.supremestickerplug.com` custom domain unchanged.
2. From the Netlify Projects page, create a **new project** for Never Miss Out.
3. Deploy `never-miss-out-updated.zip` to the new project only.
4. Test the new project's default `*.netlify.app` address before connecting a custom domain.
5. In the new project's Domain management area, add the hostname chosen for Never Miss Out.
6. At the DNS provider, leave the existing `cpa` record untouched.
7. Add only the new DNS record Netlify requests for the Never Miss Out hostname.
8. Confirm that both addresses load the correct website before changing or removing any older DNS records.

## If using Cloudflare DNS

- Keep the existing `cpa` record pointing to the CPA project's Netlify hostname.
- For a new subdomain such as `shop`, create a separate CNAME pointing to the Never Miss Out project's `*.netlify.app` hostname.
- Use **DNS only** while Netlify verifies the custom domain and provisions HTTPS. Cloudflare proxying can be enabled later if desired and tested.
- If using the apex/root domain, follow the exact records displayed by Netlify for that project. Do not change the `cpa` CNAME.

## Do not use these as the second website

- A production redeploy inside `cpa4me`
- A branch deploy of the CPA project
- A second domain alias on `cpa4me`

Those options still connect the new address or version to the CPA codebase. Never Miss Out should have its own project and, ideally, its own GitHub repository.
