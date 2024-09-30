interface ImageInterface {
    asset: {
        url: string;
    };
}
interface CategoryInterface {
    _id: string;
    title: string;
    image: ImageInterface;
    description: string;
    _createdAt: string;
    _updatedAt: string;
}

interface BlogInterface {
    _id: string;
    title: string;
    bannerImage: ImageInterface;
    body: any;
    description: string;
    category: CategoryInterface,
    _createdAt: string;
    _updatedAt: string;
}

interface CommentInterface {
    name: String;
    email: string;
    approved: boolean;
    body: string;
    _createdAt: string;
    _updatedAt: string;
}
