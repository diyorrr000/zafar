import ProjectDetailClient from '../../../components/ProjectDetailClient';

const projectData: Record<string, any> = {
    'e-commerce-platforma': {
        title: 'E-Commerce Platforma',
        description: 'Zamonaviy onlayn do\'kon tizimi. Ushbu loyiha yirik hajmdagi tovarlarni boshqarish, foydalanuvchi hisoblari va xavfsiz to\'lov tizimlarini o\'z ichiga oladi.',
        fullDescription: 'Bu loyiha Next.js 14 va TypeScript yordamida qurilgan. Ma\'lumotlar bazasi sifatida PostgreSQL va ORM sifatida Prisma ishlatilgan. To\'lovlar Stripe API orqali amalga oshiriladi. Admin panel orqali tovarlar qoldig\'i va buyurtmalarni kuzatish mumkin.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
        tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma', 'Tailwind CSS'],
        liveUrl: '#',
        repoUrl: '#'
    },
    'smart-home-app': {
        title: 'Smart Home App',
        description: 'Aqlli uy qurilmalarni boshqarish uchun mobil ilova.',
        fullDescription: 'React Native yordamida ishlab chiqilgan ushbu ilova uydagi chiroqlar, harorat va xavfsizlik kameralarini masofadan boshqarish imkonini beradi. Firebase Realtime Database yordamida qurilmalar holati lahzali yangilanadi.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000',
        tags: ['React Native', 'Firebase', 'IoT', 'Redux Toolkit'],
        liveUrl: '#',
        repoUrl: '#'
    },
};

export async function generateStaticParams() {
    return Object.keys(projectData).map((slug) => ({
        slug: slug,
    }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projectData[params.slug];

    if (!project) {
        return <div className="container" style={{ textAlign: 'center', padding: '100px' }}>Loyiha topilmadi.</div>;
    }

    return (
        <div className="container" style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            <ProjectDetailClient project={project} />
        </div>
    );
}
