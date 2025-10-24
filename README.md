# 🌌 GalaxyBoyz V3

**GalaxyBoyz V3** 是一個以 **Vue 3 + Vite** 建構的互動式網站專案，結合現代前端框架與設計系統思維，打造兼具動態體驗與視覺一致性的介面。

---

## ⚙️ 技術棧

| 類別 | 使用技術 | 說明 |
|------|-----------|------|
| 前端框架 | **Vue 3 (Composition API)** | 使用 `<script setup>` 撰寫元件邏輯，模組化、可維護性高。 |
| 開發工具 | **Vite** | 超快速的開發伺服器與輕量化建置。 |
| 狀態管理 | **Pinia** | 管理全域狀態，結構更直觀，支援 TypeScript。 |
| 路由系統 | **Vue Router** | 控制頁面導向與多頁面結構。 |
| 樣式框架 | **Tailwind CSS** + 自定義 SCSS | 使用 utility-first 方法搭配客製化樣式，提高設計靈活度。 |
| 動畫效果 | **GSAP / AOS (Animate On Scroll)** | 提供流暢的互動與滾動動畫體驗。 |
| 程式碼品質 | **ESLint + Prettier** | 維持一致的程式碼格式與可讀性。 |

---

## 📁 專案結構

```
src/
 ├─ assets/         # 圖片、icon、字型資源
 ├─ components/     # 通用元件 (Header, Footer, Card, Modal...)
 ├─ views/          # 頁面級元件
 ├─ stores/         # Pinia 狀態管理
 ├─ router/         # Vue Router 設定
 ├─ styles/         # 全域樣式與 Tailwind 設定
 ├─ composables/    # 可重用邏輯 (hooks)
 └─ main.js         # 專案進入點
```

---

## 🧪 開發指令

```bash
# 安裝套件
npm install

# 啟動開發伺服器
npm run dev

# 打包生產版本
npm run build

# 本地預覽打包結果
npm run preview
```

---

## ✨ 專案特色

- 使用 **Tailwind CSS** 實現高效率排版與快速開發。  
- 採用 **Composition API + Pinia**，邏輯乾淨又易維護。  
- 支援動畫滾動與動態互動，提升整體使用者體驗。  
- 專案結構清晰，方便未來擴充與維護。