

export type PhotoType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export type ProductItemSliceStateType = {
    photos: PhotoType[]
}