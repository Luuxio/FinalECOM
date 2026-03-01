export interface Category {
    id: string;
    name: string;
    description?: string;
}

export interface ApiResponse<T> {
    data: T;
    status: number;
}
