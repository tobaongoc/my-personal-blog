export const navigation = [{"label": "Trang chủ", "slug": ""}, {"label": "Về Nie", "slug": "ve-nie"}, {"label": "Nhật ký của Nie", "slug": "nhat-ky"}, {"label": "Hành trình kiếm con chữ", "slug": "hanh-trinh-kiem-con-chu"}, {"label": "Một chút tự hào", "slug": "mot-chut-tu-hao"}, {"label": "Thế giới trong mắt Nie", "slug": "the-gioi-trong-mat-nie"}, {label: "Ngồi nghe Nie kể", slug: "ngoi-nghe-nie-ke" }];
export const base = import.meta.env.BASE_URL;
export const pathFor = (slug: string) => `${base}${slug ? `${slug}/` : ""}`;
