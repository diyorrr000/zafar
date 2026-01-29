# Portfolio saytini Vercel'ga yuklash bo'yicha qo'llanma

Ushbu qo'llanma sizga tayyorlangan portfolioni GitHub'ga yuklash va Vercel platformasida bepul nashr qilish (publish) bosqichlarini o'rgatadi.

## 1-qadam: GitHub'da yangi ombor (Repository) yaratish

1. [GitHub](https://github.com/) sahifasiga kiring va profilingizga kiring.
2. Yuqoridagi **"+"** tugmasini bosing va **"New repository"** ni tanlang.
3. Omborga nom bering (masalan: `my-portfolio`).
4. **"Create repository"** tugmasini bosing.

## 2-qadam: Kodni GitHub'ga yuklash

Kompuyteringizda terminalni (PowerShell yoki CMD) oching va quyidagi buyruqlarni ketma-ket kiriting:

```powershell
# Gitni ishga tushirish
git init

# Barcha fayllarni tayyorlash
git add .

# Birinchi "commit"ni yaratish
git commit -m "Initial commit"

# GitHub dagi omboringiz bilan bog'lash
git remote add origin https://github.com/diyorrr000/zafar.git

# Kodni yuklash
git push -u origin main
```

## 3-qadam: Vercel'da loyihani nashr qilish

1. [Vercel](https://vercel.com/) sahifasiga kiring va GitHub orqali ro'yxatdan o'ting.
2. **"Add New"** tugmasini bosing va **"Project"** ni tanlang.
3. Ro'yxatdan GitHub'ga yuklagan omboringizni toping va **"Import"** tugmasini bosing.
4. **"Framework Preset"** qismida **Next.js** tanlanganligiga ishonch hosil qiling.
5. **"Deploy"** tugmasini bosing.

Vercel bir necha daqiqa ichida saytingizni build qiladi va sizga tayyor `.vercel.app` bilan tugaydigan link taqdim etadi.

---

> [!TIP]
> Agar kelajakda kodingizni o'zgartirsangiz va GitHub'ga `git push` qilsangiz, Vercel avtomatik ravishda saytingizni yangilab qo'yadi!
