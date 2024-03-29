type ItemPreview = {
    item_id: string
    properties: {
        name: string
        price: number
    }
}
type itemPreviewList = {
    previewList: ItemPreview[]
}
type ItemProperties = {
    name: string
    price: number
    details: {
        stock: number
        size: number
        description: string
        tags: string[]
    }
}
type Overview = {
    item_id: string;
    properties: OverviewProperties;
    manufacturer: ManufacturerDetails;
};

type ManufacturerDetails = {
    name: string;
    description: string;
    stripe_account_id: string;
    user_id: string;
};

type OverviewProperties = {
    name: string;
    price: number;
    details: OverviewDetails;
};

type OverviewDetails = {
    status: Status;
    stock: number;
    size: number;
    description: string;
    tags: string[];
};

enum Status {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}


export type { itemPreviewList, Overview, ItemPreview, ItemProperties }
