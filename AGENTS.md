<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- The wedding invitation is a single static page at / with components in src/components; no backend needed since the original had no data.
- vite.config.ts switches the server output to Vercel's format only when VERCEL is set, so Vercel deploys work without affecting Lovable publishing.
