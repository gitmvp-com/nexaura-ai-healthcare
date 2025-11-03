# 🏥 Nexaura AI Healthcare MVP

An AI-powered healthcare platform with comprehensive health tracking, AI diagnostics, and wellness management.

## ✨ Features

✅ **User Authentication** - Clerk authentication with secure user management  
✅ **User Profile & Health Data** - Track age, height, weight, gender, blood group, medical issues  
✅ **Symptom Tracking** - Log symptoms with intensity and frequency  
✅ **Medication Management** - Track medications, dosage, and adherence  
✅ **Mental Wellness Monitoring** - Track mood, sleep, stress, anxiety levels  
✅ **AI Chat/Diagnostics** - Google Generative AI integration for medical advice  
✅ **Payment Integration** - Stripe for subscriptions and payments  
✅ **Database** - Prisma with PostgreSQL  
✅ **Modern UI** - Radix UI + Tailwind CSS + Framer Motion animations  
✅ **Dashboard** - Comprehensive health dashboard  

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database
- Clerk account
- Google AI API key
- Stripe account (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/nexaura-ai-healthcare.git
cd nexaura-ai-healthcare
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
- Clerk keys from https://clerk.com
- Database URL (PostgreSQL)
- Google AI API key from https://makersuite.google.com/app/apikey
- Stripe keys from https://stripe.com (optional)

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utilities and configurations
├── actions/         # Server actions
├── constants/       # Constants and configs
└── styles/          # Global styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Radix UI, Framer Motion
- **Authentication**: Clerk
- **Database**: Prisma + PostgreSQL
- **AI**: Google Generative AI (Gemini)
- **Payments**: Stripe
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod

## 📝 Environment Variables

See `.env.example` for all required environment variables.

## 🎯 Usage

1. **Sign Up/Sign In** - Create an account using Clerk authentication
2. **Complete Onboarding** - Fill in your health profile
3. **Track Health** - Log symptoms, medications, and mental wellness data
4. **AI Chat** - Get AI-powered health insights and advice
5. **View Dashboard** - Monitor your health metrics and trends

## 🔐 Security

- All routes are protected with Clerk authentication
- Environment variables for sensitive data
- Secure database with Prisma ORM
- HTTPS in production

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

Based on [duggal1/ai-healthcare](https://github.com/duggal1/ai-healthcare)

---

**Note**: This is an MVP (Minimum Viable Product) version. For production use, add proper error handling, testing, and security measures.
