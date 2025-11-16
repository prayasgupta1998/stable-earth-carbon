# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8635f6fb-15c8-4b4c-8d68-76a6101b2b68

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8635f6fb-15c8-4b4c-8d68-76a6101b2b68) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8635f6fb-15c8-4b4c-8d68-76a6101b2b68) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Resolving "too complex" merge conflicts from GitHub

When GitHub reports that conflicts are "too complex" for the web editor, you will need to resolve them locally. The high-level flow is:

1. **Update your local main branch**
   ```bash
   git checkout main
   git fetch origin
   git pull origin main
   ```
2. **Create or update your feature branch off the refreshed main**
   ```bash
   git checkout -b fix-conflicts  # or `git checkout your-branch && git rebase main`
   ```
3. **Bring in the other branch and resolve conflicts**
   ```bash
   git merge origin/<branch-with-changes>
   # or `git rebase origin/main` if you prefer rebasing
   ```
   - Open each file containing conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
   - Decide which sections to keep or how to combine them.
   - Remove the conflict markers after editing.
4. **Test and finalize**
   ```bash
   npm install
   npm run build
   git add <files>
   git commit -m "Resolve merge conflicts"
   git push origin fix-conflicts
   ```

Finally, open a pull request (or update the existing one) with your resolved branch. Because the conflicts are now handled locally, GitHub will allow the merge.
