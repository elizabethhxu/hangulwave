# 🎵 HangulWave — Setup Guide
### Getting your site live in ~1 hour. No coding experience needed.

---

## PART 1 — Install the tools you need (15 min)

### Step 1: Install Node.js
Node.js is the engine that runs your website code.

1. Go to: **https://nodejs.org**
2. Click the big green button that says **"LTS"** (recommended version)
3. Download and run the installer — just click Next → Next → Install
4. When it's done, it will ask if you want to install additional tools. **Check that box and click Finish.**

✅ **How to know it worked:** A black window (Terminal) will pop up and run some things. Wait for it to finish and close on its own.

---

### Step 2: Open Terminal (the command line)
This is the black text window where you'll type commands. It sounds scary but you're just copying and pasting.

- **On Mac:** Press `Cmd + Space`, type `Terminal`, press Enter
- **On Windows:** Press the Windows key, type `PowerShell`, right-click it, choose "Run as Administrator"

---

### Step 3: Verify Node.js installed correctly
In the Terminal window, type this exactly and press Enter:
```
node --version
```
You should see something like `v20.11.0`. If you do, you're good. ✅

---

## PART 2 — Set up your project (10 min)

### Step 4: Move the project folder to the right place

1. **Unzip** the `hangulwave.zip` file you downloaded (double-click it on Mac, right-click → Extract All on Windows)
2. Move the `hangulwave` folder to your **Desktop**

### Step 5: Navigate to the project in Terminal
Copy and paste this into Terminal, then press Enter:

**On Mac:**
```
cd ~/Desktop/hangulwave
```

**On Windows:**
```
cd $HOME\Desktop\hangulwave
```

You should see the terminal prompt change to show you're inside the hangulwave folder. ✅

### Step 6: Install dependencies
This downloads all the code packages your site needs. Copy, paste, press Enter:
```
npm install
```
Wait for it to finish (1-2 minutes). You'll see a lot of text scroll by — that's normal.

### Step 7: Run the site locally
```
npm run dev
```
Then open your browser and go to: **http://localhost:3000**

🎉 **You should see your HangulWave site!** If you do, your code is working perfectly.

Press `Ctrl + C` in Terminal when you want to stop the local server.

---

## PART 3 — Put it on GitHub (10 min)

GitHub is where your code lives online. Vercel (the hosting service) will pull from GitHub to publish your site.

### Step 8: Log in to GitHub
Go to **https://github.com** and log in to your existing account.

### Step 9: Create a new repository
1. Click the **+** button in the top right corner
2. Click **"New repository"**
3. Name it: `hangulwave`
4. Leave everything else as default
5. Click **"Create repository"**

### Step 10: Push your code to GitHub
GitHub will show you a page with commands. Copy and run these one at a time in your Terminal (make sure you're still in the hangulwave folder):

```
git init
```
```
git add .
```
```
git commit -m "Initial commit"
```
```
git branch -M main
```

Now copy the line from GitHub that looks like this (it'll have YOUR username in it):
```
git remote add origin https://github.com/YOURUSERNAME/hangulwave.git
```
```
git push -u origin main
```

It will ask for your GitHub username and password. For the password, use a **Personal Access Token** (not your regular password):
- Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic) → Generate new token
- Check the `repo` box, click Generate
- Copy that token and use it as your password

✅ **Refresh your GitHub page** — you should see your files there.

---

## PART 4 — Deploy to Vercel (10 min)

Vercel will host your site and give you a public URL.

### Step 11: Create a Vercel account
1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** — this connects the two accounts automatically

### Step 12: Import your project
1. Once logged in, click **"Add New Project"**
2. You'll see your `hangulwave` repository listed — click **"Import"**
3. Leave all settings as default
4. Click **"Deploy"**

Wait ~2 minutes while Vercel builds your site.

🎉 **You'll get a URL like `hangulwave.vercel.app` — your site is live!**

---

## PART 5 — Connect your custom domain (10 min)

### Step 13: Add your domain in Vercel
1. In your Vercel project, go to **Settings → Domains**
2. Type in your domain (e.g. `hangulwave.com`) and click Add
3. Vercel will show you two DNS records you need to add

### Step 14: Update DNS in Namecheap
1. Log in to **Namecheap.com**
2. Go to **Domain List → Manage** next to your domain
3. Click **Advanced DNS**
4. Add the records Vercel gave you (they'll look like `A` records or `CNAME` records)
5. Save changes

⏱ DNS changes take 15 minutes to 48 hours to fully propagate. Usually it's fast.

✅ **Once it propagates, your site is live at your custom domain!**

---

## 🆘 If something goes wrong

**"command not found" errors:** Node.js didn't install correctly. Try reinstalling from nodejs.org.

**"permission denied" on Mac:** Type `sudo` before the command and enter your Mac password.

**GitHub password not working:** Make sure you're using a Personal Access Token, not your account password.

**Site shows an error on Vercel:** Go to your Vercel project → Deployments → click the failed deployment → View logs. Screenshot the error and share it — it's almost always a fixable config issue.

---

## 🚀 What's next after you're live

1. **Share the URL** with 20-30 K-pop fan friends and ask for honest feedback
2. **Add more song content** — edit `lib/songs.ts` to add new songs and lessons
3. **Set up Supabase** for user accounts and saved progress (next big milestone)
4. **Set up Stripe** for paid subscriptions

You've got this! 🎵
