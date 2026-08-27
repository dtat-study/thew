# TheW - Source

Mã nguồn cho dự án TheW, nền tảng học ngoại ngữ tập trung vào từ vựng (Vocabulary) và ngữ pháp (Grammar). Xem thiết kế chi tiết tại [`BASE_DESIGN.md`](../BASE_DESIGN.md), [`DB_DESIGN.md`](../DB_DESIGN.md), [`ONBOARDING_DESIGN.md`](../ONBOARDING_DESIGN.md) và [`SCREENS_BACKEND_DESIGN.md`](../SCREENS_BACKEND_DESIGN.md) ở thư mục gốc.

## Cấu trúc

| Thư mục | Vai trò | Công nghệ |
|---|---|---|
| [`thewcore`](thewcore) | Backend, modular monolith giai đoạn đầu (Auth, Vocabulary, Grammar, Learning, Review) | Java Spring Boot, PostgreSQL |
| [`thewclient`](thewclient) | Frontend web | React JS |
