import BlogArticleClient from '../../../components/BlogArticleClient';

const postData: Record<string, any> = {
    'veb-dasturlash-tendentsiyalari-2024': {
        title: '2024-yilda Veb Dasturlash Tendentsiyalari',
        date: '20 Yanvar, 2024',
        content: `
      2024-yil veb dasturlash olamida katta o'zgarishlar yili bo'lishi kutilmoqda. 
      Sun'iy intellektning integratsiyasi, Next.js 14 ning Server Components imkoniyatlari va 
      foydalanuvchi interfeyslaridagi yangi yondashuvlar sohani butunlay o'zgartirmoqda.
      
      Biz endilikda nafaqat kod yozish, balki samarali va aqlli tizimlarni barpo etish haqida ko'proq qayg'urishimiz kerak.
    `
    },
    'typescript-muhimligi': {
        title: 'Nega TypeScript o\'rganish muhim?',
        date: '15 Yanvar, 2024',
        content: `
      Zamonaviy veb loyihalarda TypeScript shunchaki "yaxshi qo'shimcha" emas, balki zaruratga aylandi. 
      U kodni yozish jarayonida xatolarni aniqlashga va jamoaviy ishlashda katta afzalliklarga ega.
    `
    }
};

export async function generateStaticParams() {
    return Object.keys(postData).map((slug) => ({
        slug: slug,
    }));
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
    const post = postData[params.slug];

    if (!post) {
        return <div className="container" style={{ textAlign: 'center', padding: '100px' }}>Maqola topilmadi.</div>;
    }

    return (
        <div className="container" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            <BlogArticleClient post={post} />
        </div>
    );
}
