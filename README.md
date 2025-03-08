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
- **_@ai-sdk/xai_** v1.0.6
- **_@aws-sdk/client-s3_** v3.172.0
- **_@aws-sdk/s3-request-presigner_** v3.172.0
- **_@radix-ui/react-slot_** v1.1.1
- **_ai_** v4.0.7
- **_axios_** v1.7.8
- **_class-variance-authority_** v0.7.0
- **_clsx_** v2.1.1
- **_lucide-react_** v0.460.0
- **_mammoth_** v1.8.0
- **_mime_** v4.0.4
- **_next_** 15.0.3
- **_react_** 19.0.0-rc-66855b96-20241106
- **_react-dom_** 19.0.0-rc-66855b96-20241106
- **_react-icons_** v5.3.0
- **_tailwind-merge_** v2.5.5
- **_tailwindcss-animate_** v1.0.7

Dev Dependencies

- **_@types/formidable_** v3.4.5
- **_@types/node_** v20
- **_@types/react_** v18
- **_@types/react-dom_** v18
- **_eslint_** v8
- **_eslint-config-next_** v15.0.3
- **_formidable_** v3.5.2
- **_postcss_** v8
- **_tailwindcss_** v3.4.1
- **_typescript_** v5

## Roadmap

- Extract text from PDF files to reduce token usage with Anthropic

- Configure prompt chaining to upload textbook pages to convert to notes and then convert to quiz questions

- Configure Authentication and user account creation

## Feedback

If you have any feedback, please reach out to me at nsonnenberg@bespokecode.io
