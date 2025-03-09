# Quizzzard

This project is an AI application where students can upload their notes from class and Quizzard will generate a quiz to test them on their material to quickly prepare them for course exams. Image files can be uploaded to generate quizzes using xAI's Grok Vision Beta LLM. PDF or Word Doc files can also be uploaded to generate quizzes using Anthropic's Claude Sonnet LLM.

## Authors

- [@ntsonnenberg](https://github.com/ntsonnenberg)

## Tech Stack

**Client:** Next.js, React, TailwindCSS

**Deployment:** Vercel, AWS S3

## Installation

Install Porfolio with npm

```bash
  git clone https://github.com/ntsonnenberg/quizzard.git
  cd quizzard
  npm install
  npm run dev
```

## Node Packages

Dependencies

- **_@ai-sdk/anthropic_** v1.0.2
- **_@ai-sdk/google_** v1.0.12
- **_@ai-sdk/xai_** v1.0.6
- **_@aws-sdk/client-s3_** v3.172.0
- **_@aws-sdk/s3-request-presigner_** v3.172.0
- **_@clerk/nextjs_** v6.12.0
- **_@radix-ui/react-slot_** v1.1.1
- **_ai_** v4.0.7
- **_axios_** v1.7.8
- **_class-variance-authority_** v0.7.0
- **_clsx_** v2.1.1
- **_file-type_** v20.4.0
- **_flagsmith_** v9.0.4
- **_loops_** v4.0.0
- **_lucide-react_** v0.460.0
- **_mammoth_** v1.8.0
- **_motion_** v12.4.7
- **_next_** 15.2.1
- **_react_** v19.0.0
- **_react-dom_** v19.0.0
- **_react-icons_** v5.3.0
- **_tailwind-merge_** v2.5.5
- **_tailwindcss-animate_** v1.0.7
- **_zod_** v3.24.2

Dev Dependencies

- **_@tailwindcss/postcss_** v4.0.0
- **_@types/formidable_** v3.4.5
- **_@types/node_** v20
- **_@types/react_** v19.0.10
- **_@types/react-dom_** v19.0.4
- **_eslint_** v8
- **_eslint-config-next_** v15.0.3
- **_formidable_** v3.5.2
- **_postcss_** v8
- **_tailwindcss_** v4.0.0
- **_typescript_** v5.1.3

## Roadmap

- Configure prompt chaining to upload textbook pages to convert to notes and then convert to quiz questions

- Optmize for gathering feedback and product validation

## Feedback

If you have any feedback, please reach out to me at nsonnenberg@bespokecode.io
