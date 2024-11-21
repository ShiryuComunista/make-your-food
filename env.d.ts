/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_BASE_URL: string
  // add other custom environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
